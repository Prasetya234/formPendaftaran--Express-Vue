import http from "../http-common";

class PendaftaranDataService {
  getAll() {
    return http.get("/pendaftarans");
  }

  get(id) {
    return http.get(`/pendaftarans/${id}`);
  }

  create(data) {
    return http.post("/pendaftarans", data);
  }

  update(id, data) {
    return http.put(`/pendaftarans/${id}`, data);
  }

  delete(id) {
    return http.delete(`/pendaftarans/${id}`);
  }

  deleteAll() {
    return http.delete(`/pendaftarans`);
  }

  findByNama_murid(nama_murid) {
    return http.get(`/pendaftarans?nama_murid=${nama_murid}`);
  }
}

export default new PendaftaranDataService();