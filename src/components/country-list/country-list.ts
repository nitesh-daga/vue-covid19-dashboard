import { Component, Vue } from "vue-property-decorator";
const CountrySummary = () => import('./../country-summary/country-summary');
@Component({
    template: require("./country-list.html"),
    components: {
        CountrySummary
    }
  })
export default class CountryList extends Vue {
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
        this.$store.dispatch('loadUsers');
    }
    get Global(){
        return this.$store.state.Global;
    }
    get Countries(){
        return this.$store.state.Countries;
    }
    public displaydetails(item:any, row:any) {
        let id = item.Slug;
        this.$router.push({ name: "countrylist-details", params: { id } });
    }
    public mounted() {
        this.retrieveCovidData();
    }
}
