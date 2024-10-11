<template>
  <div class="bg-image-wave relative px-5 lg:px-16 py-10">
    <div class="bg-white min-h-screen opacity-90 shadow-md rounded-lg font-cera">
      <img
        class="bg-cover object-cover rounded-t-lg h-60 w-full"
        src="@/assets/images/profile/profile-bg.jpg"
        alt="Background Profile"
      />

      <div class="absolute top-24 left-1/4 md:left-36 bg-white rounded-full p-1.5 mt-20 z-20">
        <img src="@/assets/images/profile/profile-petani.png" alt="Profile" />
      </div>

      <ButtonEditProfile />

      <div class="text-3xl font-bold px-5 lg:px-20 mt-28">Bagas Adi Rukmana</div>
      <div class="grid grid-cols-12 px-5 lg:px-20 pt-5 pb-20">
        <div class="col-span-12 lg:col-span-6">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-span-4 font-bold">Alamat</div>
            <div class="col-span-8 font-bold">: &nbsp; Batu aji No. 10</div>

            <div class="col-span-4 font-bold">Desa/Kelurahan</div>
            <div class="col-span-8 font-bold">: &nbsp; Desa Panton Bili</div>

            <div class="col-span-4 font-bold">Kecamatan</div>
            <div class="col-span-8 font-bold">: &nbsp; Kecamatan Timang Rasa</div>

            <div class="col-span-4 font-bold">Kota/Kabupaten</div>
            <div class="col-span-8 font-bold">: &nbsp; Kabupaten Bener Meriah</div>

            <div class="col-span-4 font-bold">Provinsi</div>
            <div class="col-span-8 font-bold">: &nbsp; Aceh</div>

            <div class="col-span-4 font-bold">Anggota Keluarga</div>
            <div class="col-span-8 font-bold">: &nbsp; 5 Orang</div>

            <div class="col-span-4 font-bold">Total Asset</div>
            <div class="col-span-8 font-bold text-primary-2">
              : &nbsp;
              <RouterLink :to="{ name: 'Daftar Aset Petani' }">23 ha</RouterLink>
            </div>

            <div class="col-span-4 font-bold text-primary-2">
              <RouterLink :to="{ name: 'Product Traceability' }">Product Traceability</RouterLink>
            </div>
            <div class="col-span-8 font-bold"></div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6">
          <div class="grid grid-cols-12 gap-y-2">
            <div class="col-span-4 font-bold">Status</div>
            <div class="col-span-8 font-bold">: &nbsp; Anggota Koperasi</div>

            <div class="col-span-4 font-bold">Pendidikan</div>
            <div class="col-span-8 font-bold">: &nbsp; S-1 Manajemen Pertanian</div>

            <div class="col-span-4 font-bold">Surat Kontrak</div>
            <div class="col-span-8 font-bold">: &nbsp; -</div>

            <div class="col-span-4 font-bold">Jenis</div>
            <div class="col-span-8 font-bold">: &nbsp; Koperasi</div>

            <div class="col-span-4 font-bold">Email</div>
            <div class="col-span-8 font-bold">: &nbsp; bagas@gmail.com</div>

            <div class="col-span-4 font-bold">Total Panen</div>
            <div class="col-span-8 font-bold text-primary-2">
              <p>
                :
                <RouterLink :to="{ name: 'Daftar Tanam Nilam Petani' }">&nbsp; 65.000 kg (35% target panen)</RouterLink>
              </p>
              <ProgressBar progress="35%" />
            </div>

            <div class="col-span-4 font-bold">Total Produksi</div>
            <div class="col-span-8 font-bold text-primary-2">
              <p>
                :
                <RouterLink :to="{ name: 'Daftar Produksi Nilam Petani' }"
                  >&nbsp; 523 kg (80% target produksi)</RouterLink
                >
              </p>
              <ProgressBar progress="80% " />
            </div>

            <div class="col-span-4 font-bold">Tanam (sekarang)</div>
            <div class="col-span-8 font-bold text-primary-2">
              <p>
                :
                <RouterLink :to="{ name: 'Daftar Tanam Nilam Petani Progress' }"
                  >&nbsp; 5 ha (500 kg target panen)</RouterLink
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonEditProfile from './components/ButtonEditProfile.vue'
import ProgressBar from './components/ProgressBar.vue'
</script>
