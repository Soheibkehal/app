<template>
<div>
 <div id="nav"><router-link to="/myaccount">Profil</router-link> |</div>
  <div class="container-dashboard">
    <div id="clock-container">
      <Clock />
    </div>
    <div id="calendar">
      <h2>Working times</h2>
      <Calendar />
    </div>
  </div>
</div>
</template>

<script>
import Clock from "./Clock";
import Calendar from "./Calendar";
export default {
  name: "Dashboard",
  components: {
    Clock,
    Calendar,
  },
  methods: {
    ok() {
      console.log("ok");
    },
    Profil(){
      this.$router.push({ name: "MyAccount" });
    }
  },
};
</script>

<style lang="scss">
.container-dashboard {
  display: flex;
  width: 70%;
  margin: 0 auto;
  #clock-container {
    width: 30%;
    #clock {
      box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2),
        0px 10px 10px rgba(0, 0, 0, 0.2);
      background-color: #1f2224;
      border-radius: 2vw;
      padding: 3vw 1vw;
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
      p {
        color: white;
        font-size: 1vw;
        margin-top: 1vw;
      }
    }
  }
  #calendar {
    width: 68%;
    margin-left: 2%;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2),
      0px 10px 10px rgba(0, 0, 0, 0.2);
    background-color: #1f2224;

    border-radius: 2vw;

    h2 {
      text-align: left;
      color: white;
      width: 85%;
      margin: 1vw auto 0.3vw;
      font-size: 1vw;
      font-weight: 700;
    }
    ul {
      padding: 0;
      width: 90%;
      margin: 0 auto 2vw;

      border-radius: 1vw;
      li {
        display: flex;
        min-height: 6vw;
        border-bottom: 1px solid #161617;
        align-items: center;
        &:last-child {
          border: 0;
        }
        .date {
          width: 20%;
          h3.day {
            color: #dfc824;
            font-size: 1.9vw;
            margin: 0;
            font-weight: 700;
          }
          h3.month {
            color: white;
            font-size: 1vw;
            margin: 0;
          }
        }
        .session {
          width: 80%;
          display: flex;
          flex-direction: column;
          p {
            text-align: center;
            margin: 0;
            color: white;
            font-size: 1vw;
            cursor: pointer;
          }
          p:hover {
            color: #dfc824;
          }
          p.add-link {
            color: #dfc824;
            font-size: 0.8vw;
            font-weight: 700;
            cursor: pointer;
          }
        }
      }
    }
  }
  #nav {
  padding: 30px;
  width: 300px;
}

#nav a {
  left: 25%;
  font-weight: bold;
  font-family: Montserrat;
  color: white;
}

#nav a.router-link-exact-active {
  color: #dfc824;
}
}
</style>
