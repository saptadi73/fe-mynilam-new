from typing import Optional
from fastapi import APIRouter, HTTPException, Query, Request, Depends
from fastapi.security import HTTPAuthorizationCredentials
from src.models.employee import Employee, EmployeeResponse
from src.utils.auth import get_current_user, decode_credentials
from src.utils.odoo_rpc import odoo_jsonrpc_call
from config.odooconnect import Settings
import xmlrpc.client
import logging.config
from collections import defaultdict
from datetime import datetime
import calendar
import logging

# Initialize logger
logger = logging.getLogger(__name__)

# Create API router for dashboard-related endpoints
dashboard_router = APIRouter(
    prefix="/petani",  # All routes will be prefixed with /dashboard
    responses={404: {"description": "Not found"}},
)

@dashboard_router.get("/total-penjualan-bulan-ke-bulan", response_model=EmployeeResponse, summary="Retrieve Monthly Sales Data")
async def _get_total_penjualan_bulan_ke_bulan(current_user: dict = Depends(get_current_user)):
    """
    Helper function to retrieve monthly sales data from January to current month.
    Returns data grouped by month with total sales amount.
    """
    logger.info("Retrieving monthly sales data...")

    config = Settings()

    if current_user is None:
        raise HTTPException(status_code=401, detail="Unauthorized")

    password = decode_credentials(current_user["plain_password"])

    # Get current year
    current_year = datetime.now().year
    current_month = datetime.now().month

    # Domain: filter by current year and date_order field
    domain = [
        ['date_order', '>=', f'{current_year}-01-01'],
        ['date_order', '<=', f'{current_year}-{current_month:02d}-31']
    ]

    # Fields to retrieve
    fields_to_read = ["date_order", "value"]

    params = [
        config.ODATABASE,
        current_user["userid"],
        password,
        "ownership.line",
        "search_read",
        domain,
        {"fields": fields_to_read},
    ]

    result = await odoo_jsonrpc_call(config.ENDPOINT, "object", "execute_kw", params)

    if not result or "result" not in result or not result["result"]:
        logger.error("No sales data received from Odoo")
        # Return empty data structure with all months
        empty_data = []
        for month in range(1, 13):
            month_name = calendar.month_name[month]
            empty_data.append({
                "month": month_name,
                "total_sales_amount": 0
            })
        return EmployeeResponse(
            status="success",
            description="Data penjualan bulanan berhasil diambil.",
            data=empty_data
        )

    sales_data = result["result"]
    logger.info(f"Retrieved {len(sales_data)} sales records.")

    # Group data by month
    monthly_sales = defaultdict(float)

    for record in sales_data:
        date_order = record.get("date_order")
        value = record.get("value", 0)

        if date_order:
            try:
                # Parse date_order (assuming format: "2025-04-13 17:46:03")
                date_obj = datetime.strptime(date_order, "%Y-%m-%d %H:%M:%S")
                month = date_obj.month
                monthly_sales[month] += value
            except ValueError as e:
                logger.warning(f"Failed to parse date_order: {date_order}, error: {e}")
                continue

    # Create data for all months from January to current month
    processed_data = []
    for month in range(1, current_month + 1):
        month_name = calendar.month_name[month]
        total_sales = monthly_sales.get(month, 0)
        processed_data.append({
            "month": month_name,
            "total_sales_amount": total_sales
        })

    return EmployeeResponse(
        status="success",
        description="Data penjualan bulanan berhasil diambil.",
        data=processed_data
    )
