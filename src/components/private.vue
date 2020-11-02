<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <button type="submit" @click="refreshCityTemperature" class="btn btn-primary">Show Data</button>
          <h1 class="areaTitle">{{temp}}</h1>
          <area-chart
            id="area_2"
            data='[
                  { "key": "2013", "value": 30 },
                  { "key": "2014", "value": 25 },
                  { "key": "2015", "value": 29 },
                  { "key": "2016", "value": 50 }
                ]'
            resize="true"
            line-colors='[ "#FF6384", "#36A2EB" ]'
            grid="true"
            grid-text-weight="bold"
          >
          </area-chart>
        </div>
        <div class="col-md-5">
          <h1 class="barTitle">{{temp}}</h1>
          <bar-chart
            id="bar"
            :data="barData"
            xkey="year"
            :ykeys="ykeys"
            resize="true"
            labels='[ "soheib"]'
            bar-colorssss='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
            grid="true"
            grid-text-weight="bold"
          >
          </bar-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Raphael from "raphael/raphael";
global.Raphael = Raphael;
import { BarChart, AreaChart } from "vue-morris";
import axios from 'axios';
import VueAxios from 'vue-axios'
import {
  getWorkingtimes,
} from "../api/workingtimes";
export default {
  name: "app",
  data() {
    return {
      temp:'',
      barData: [
        { year: "lundi", soheib: 10 },
        { year: "mardi", soheib: 10},
        { year: "mercredi", soheib: 20},
        { year: "jeudi", soheib: 30},
      ],
      ykeys: ["soheib"],
      lineData: [] /*[
        { year: '2013', a: 10, b: 5 },
        { year: '2014', a: 40, b: 15 },
        { year: '2015', a: 20, b: 25 },
        { year: '2016', a: 30, b: 20 },
      ],*/,
      donutData: [
        { label: "Red", value: 300 },
        { label: "Blue", value: 50 },
        { label: "Yellow", value: 100 },
      ],
      areaData: [
        { year: "2013", a: 30, b: 5 },
        { year: "2014", a: 25, b: 15 },
        { year: "2015", a: 29, b: 25 },
        { year: "2016", a: 50, b: 20 },
      ],
    };
  },
  methods: {
      refreshCityTemperature(e){
            //this.displayedCity = this.city;
            //${this.url_api}weather?q=${this.ville}&mode=json&units=metric&APPID=efa3a6455c9b0c8d4265877f5b2474c2
            
                axios.get(`http://localhost:4000/api/users/2`)
                .then(Response => this.temp = Response.data.data.fname);
            
        }
  },
  components: {
    BarChart,
    AreaChart,
  },

};
</script>

<style lang="scss" scoped>
button {
  border-radius: 20px;
  background-color: #dfc824;
  color: #fff;
  font-size: 1vw;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 0;
}
</style>