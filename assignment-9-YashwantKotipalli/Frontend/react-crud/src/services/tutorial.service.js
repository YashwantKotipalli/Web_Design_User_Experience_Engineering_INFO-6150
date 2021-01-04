import http from "../http-common";

// creating services that use axios object to send HTTP requests

// calling the axios GET,POST,PUT and DELETE method corresponding to the HTTP requests:
/**
 * 1) GET
 * 2) POST
 * 3) PUT
 * 4) DELETE 
 * 
 * services executed all the CRUD operations
 */
class TutorialDataService {
  getAll() {
    return http.get("/tutorials");
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();