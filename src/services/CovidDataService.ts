import http from "../http-common";

class CovidDataService {
  public getAll() {
    return http.get("/summary");
  }

  public getCountryData(id: string) {
    return http.get(`/total/country/${id}`);
  }

}

export default new CovidDataService();
