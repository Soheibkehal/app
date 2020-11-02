<template>
  <div v-if="lastClock.status" id="clock">
    <button class="btn" v-on:click="postClockAndWorkingtime(false)">
      STOP SESSION
    </button>
    <p>Session started at {{ lastClock.time }}</p>
  </div>
  <div v-else id="clock">
    <button class="btn" v-on:click="postClockAndWorkingtime(true)">
      START SESSION
    </button>
    <p>Session finished at {{ lastClock.time }}</p>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import Vue from "vue";
import {
  getWorkingtimes,
  addWorkingtime,
  updateWorkingtime,
  getLastWorkingTime,
} from "../../api/workingtimes";
import { getClock, postClock } from "../../api/clock";
import { URL } from "../../config/constants";

export default {
  name: "Clock",
  data() {
    return {
      
      lastClock: {},
    };
  },
  methods: {
    async getLastClock() {
      this.lastClock = await getClock();
    },
    async postClockAndWorkingtime(bool) {
      const now = moment().format("HH:mm");
      const today = moment().format("YYYY-MM-DD HH:mm:ss");
      const time = moment(this.lastClock.time, "HH:mm").format("HH:mm");

      if (time == now) {
        alert("Please wait, at least one minute to stop session");
        return;
      }

      if (this.lastClock.status) {
        const workingtime = await getLastWorkingTime(this.lastClock.time);
        await updateWorkingtime(workingtime.start, today, workingtime.id);
      } else {
        await addWorkingtime(today, today);
      }

      await this.toggleSession(bool);
    },
    async toggleSession(bool) {
      const now = moment().format("HH:mm:ss");
      await postClock(bool);
      Vue.set(this.lastClock, "status", bool);
      Vue.set(this.lastClock, "time", now);
    },
  },
  created() {
    this.getLastClock();
  },
};
</script>
