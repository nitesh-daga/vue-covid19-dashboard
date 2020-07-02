import { Component, Vue } from "vue-property-decorator";
const CountrySummary = () => import('./../country-summary/country-summary');
const CountryList = () => import('./../country-list/country-list');
@Component({
    template: require("./home.html"),
    components: {
        CountrySummary,
        CountryList
    }
  })
export default class HomeComponent extends Vue {

}