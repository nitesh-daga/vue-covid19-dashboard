import { Component, Vue } from "vue-property-decorator";
import CovidDataService from "../../services/CovidDataService";
@Component({
    template: require("./country-details.html"),
  })
export default class CountryDetails extends Vue {
  private countryData: any = null;
  private message: string = "";
  private headers: any = [

    { text: "Country", value: "Country" },
    { text: "Date", value: "Date" },
    { text: "Total Cases", value: "Confirmed" },
    { text: "Total Deaths", value: "Deaths" },
    { text: "Total Recovered", value: "Recovered" },
    { text: "Total Active", value: "Active" },
  ];
  public getCountryData(id: string) {
    CovidDataService.getCountryData(id)
      .then((response) => {
        this.countryData = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }
  public displayList() {
    this.$router.push({ name: "Home"});
  }
  public mounted() {
    this.message = "";
    this.getCountryData(this.$route.params.id);
  }
}
