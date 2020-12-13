<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by nama_murid"
          v-model="nama_murid"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchNama_murid"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Pendaftarans List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(pendaftaran, index) in pendaftarans"
          :key="index"
          @click="setActivePendaftarans(pendaftaran, index)"
        >
          {{ pendaftaran.nama_murid }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllPendaftarans">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentPendaftaran">
        <h4>Pendaftaran</h4>
        <div>
          <label><strong>ID:</strong></label> {{ currentPendaftaran.id }}
        </div>
        <div>
          <label><strong>Nama Murid:</strong></label> {{ currentPendaftaran.nama_murid }}
        </div>
        <div>
          <label><strong>Jenis Kelamin:</strong></label> {{ currentPendaftaran.jenis_kelamin }}
        </div>
         <div>
          <label><strong>Tempat Tanggal Lahir:</strong></label> {{ currentPendaftaran.ttl }}
        </div>
         <div>
          <label><strong>Agama:</strong></label> {{ currentPendaftaran.agama }}
        </div>
         <div>
          <label><strong>Jumlah Saudara:</strong></label> {{ currentPendaftaran.jumlah_saudara }}
        </div>
         <div>
          <label><strong>Alamat:</strong></label> {{ currentPendaftaran.alamat }}
        </div>
         <div>
          <label><strong>CreatedAt:</strong></label> {{ currentPendaftaran.createdAt }}
        </div>
         <div>
          <label><strong>UpdatedAt:</strong></label> {{ currentPendaftaran.updatedAt }}
        </div>
         <div>
          <label><strong>Nomor telefon:</strong></label> {{ currentPendaftaran.no_telpon }}
        </div>
         <div>
          <label><strong>Email:</strong></label> {{ currentPendaftaran.email }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentPendaftaran.published ? "Diterima" : "Tidak_Diterima" }}
        </div>

        <a class="badge badge-warning"
          :href="'/pendaftarans/' + currentPendaftaran.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Pendaftaran...</p>
      </div>
    </div>
  </div>
</template>

<script>
import PendaftaranDataService from "../services/PendaftaranDataService";

export default {
  name: "pendaftarans-list",
  data() {
    return {
      pendaftarans: [],
      currentPendaftaran: null,
      currentIndex: -1,
      nama_murid: ""
    };
  },
  methods: {
    retrievePendaftarans() {
      PendaftaranDataService.getAll()
        .then(response => {
          this.pendaftarans = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrievePendaftarans();
      this.currentPendaftaran = null;
      this.currentIndex = -1;
    },

    setActivePendaftaran(pendaftaran, index) {
      this.currentPendaftaran = pendaftaran;
      this.currentIndex = index;
    },

    removeAllPendaftarans() {
      PendaftaranDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchNama_murid() {
      PendaftaranDataService.findByNama_murid(this.nama_murid)
        .then(response => {
          this.pendaftarans = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrievePendaftarans();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>