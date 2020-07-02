import { Component, Vue } from "vue-property-decorator";

@Component({
    template: require("./country-summary.html"),
  })
export default class CountrySummary extends Vue {
    get Global(){
        return this.$store.state.Global;
    }
}
