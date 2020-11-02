<template>
  <div>
    <b-modal id="modal-add" title="Add session" hide-footer>
      Date : {{ selectedDate }}
      <b-form-timepicker
        v-model="selectedStart"
        placeholder="Choose a start time"
        locale="fr"
      ></b-form-timepicker>
      <b-form-timepicker
        v-model="selectedEnd"
        placeholder="Choose an end time"
        locale="fr"
      ></b-form-timepicker>
      <div class="btn-modal">
        <button v-on:click="setNewWorkingtime()">ADD</button>
      </div>
    </b-modal>
    <b-modal id="modal-update" title="Update session" hide-footer class="modal">
      <b-form-timepicker
        v-model="selectedStart"
        placeholder="Choose a start time"
        locale="fr"
      ></b-form-timepicker>
      <b-form-timepicker
        v-model="selectedEnd"
        placeholder="Choose an end time"
        locale="fr"
      ></b-form-timepicker>
      <div class="btn-modal">
        <button v-on:click="setUpdateWorkingtime()">UPDATE</button>
        <button v-on:click="setDeleteWorkingtime()">DELETE</button>
      </div>
    </b-modal>

    <ul>
      <li v-for="cell in calendar" :key="cell.date.day">
        <div class="date">
          <h3 class="day">{{ cell.date.day }}</h3>
          <h3 class="month">{{ cell.date.month }}</h3>
        </div>
        <div class="session">
          <p
            v-for="worktime in cell.workingtimes"
            :key="worktime.id"
            v-b-modal.modal-update
            v-on:click="selectWorktime(worktime, cell.date.date)"
          >
            {{ worktime.start }} →
            {{ worktime.start == worktime.end ? "now" : worktime.end }}
          </p>
          <p
            class="add-link"
            v-b-modal.modal-add
            v-on:click="selectDate(cell.date.date)"
          >
            Add session
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import {
  getWorkingtimes,
  addWorkingtime,
  updateWorkingtime,
  deleteWorkingtime,
} from "../../api/workingtimes";

export default {
  name: "Calendar",
  data() {
    return {
      calendar: [],
      selectedDate: "",
      selectedStart: "",
      selectedEnd: "",
      selectedWorkingtime: "",
    };
  },
  methods: {
    async fetchWorkingTimes() {
      const getEndDate = () => {
        return moment()
          .endOf("day")
          .format("YYYY-MM-DD HH:mm:ss");
      };

      const getStartDate = () => {
        return moment()
          .subtract(10, "days")
          .startOf("day")
          .format("YYYY-MM-DD HH:mm:ss");
      };

      const getDates = () => {
        var start = moment(getStartDate(), "YYYY-MM-DD");
        var end = moment(getEndDate(), "YYYY-MM-DD");

        var dates = [];
        var date = end;

        while (date >= start) {
          dates.push({
            date: moment(date).format("YYYY-MM-DD"),
            day: moment(date).format("DD"),
            month: moment(date).format("MMM"),
          });
          date = date.clone().subtract(1, "d");
        }
        return dates;
      };

      const parseDateToDay = (time) => {
        return moment(time).format("YYYY-MM-DD");
      };

      const parseDateToTime = (time) => {
        return moment(time).format("HH:mm:ss");
      };

      const dates = getDates();

      const workingtimes = await getWorkingtimes(getStartDate(), getEndDate());
      const workingtimesWithDay = workingtimes.map((el) => {
        return {
          ...el,
          start: parseDateToTime(el.start),
          end: parseDateToTime(el.end),
          date: parseDateToDay(el.start),
        };
      });

      this.calendar = dates.map((date) => {
        const workingtimesFiltered = workingtimesWithDay.filter(
          (worktime) => worktime.date == date.date
        );

        return {
          date,
          workingtimes: workingtimesFiltered,
        };
      });
    },
    selectDate(date) {
      this.selectedDate = date;
    },
    setDates() {
      const start = this.selectedStart;
      const end = this.selectedEnd;
      const startDate = `${this.selectedDate} ${start}`;
      const endDate = `${this.selectedDate} ${end}`;

      return { startDate, endDate };
    },
    async setNewWorkingtime() {
      const { startDate, endDate } = this.setDates();
      await addWorkingtime(startDate, endDate);
    },
    selectWorktime(workingtime, date) {
      this.selectedWorkingtime = workingtime;
      this.selectedStart = moment(workingtime.start, "HH:mm:ss").format(
        "HH:mm:ss"
      );
      this.selectedEnd = moment(workingtime.end, "HH:mm:ss").format("HH:mm:ss");
      this.selectDate(date);
    },
    async setUpdateWorkingtime() {
      const { startDate, endDate } = this.setDates();
      await updateWorkingtime(startDate, endDate, this.selectedWorkingtime.id);
    },
    async setDeleteWorkingtime() {
      await deleteWorkingtime(this.selectedWorkingtime.id);
    },
  },
  created() {
    this.fetchWorkingTimes();
  },
};
</script>

<style lang="scss" scoped>
.btn-modal {
  display: flex;
  justify-content: space-around;
}
.b-form-btn-label-control.form-control {
  margin: 2vw 0;
}
</style>
