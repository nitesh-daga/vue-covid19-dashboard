import { Component, Vue } from "vue-property-decorator";
import CovidDataService from "../../services/CovidDataService";

@Component({
    template: require("./country-list.html"),
  })
export default class CountryList extends Vue {
    private Countries: any[] = [];
    private Global: any = {};
    private headers: any = [
        { text: "Country", value: "Country" },
        { text: "Total Cases", value: "TotalConfirmed" },
        { text: "New Cases", value: "NewConfirmed" },
        { text: "Total Deaths", value: "TotalDeaths" },
        { text: "New Deaths", value: "NewDeaths" },
        { text: "Total Recovered", value: "TotalRecovered" },
        { text: "New Recovered", value: "NewRecovered" },
      ];

    public retrieveCovidData() {
        CovidDataService.getAll()
            .then((response: any) => {
                this.Countries = response.data.Countries;
                this.Global = response.data.Global;
            })
            .catch((e) => {
                console.log(e);
            });
    }
    public displaydetails(id: any) {
        this.$router.push({ name: "countrylist-details", params: { id } });
    }
    public mounted() {
        this.retrieveCovidData();
    }
}
