<template>
  <div>
     <button
      v-on:click="Skills"
      type="button"
      id="register"
      class="btn btn-primary"
    >
      Skills
    </button>
    <div class="container">
      <br /><br /><br />
      <h1>
        <img
          src="../../assets/BG.jpg"
          height="50px"
          width="50px"
          alt=""
        />&emsp; &#160;My Account
      </h1>
      <br />
      <div class="overlay-container">
        <form>
          <div class="form-group">
            <div
              class="form-control"
              placeholderr="Name"
              style="text-align: left"
            >
              <p><b>Name :</b> Vanissa</p>
            </div>
          </div>
          <div class="form-group">
            <div
              class="form-control"
              placeholderr="Lname"
              style="text-align: left"
            >
              <p><b>Last Name :</b> Balakichenane</p>
            </div>
          </div>
          <div class="form-group">
            <div
              class="form-control"
              placeholderr="Email"
              style="text-align: left"
            >
              <p><b>Email :</b> epitech@epitech.eu</p>
            </div>
          </div>
          <div class="form-group">
            <div
              class="form-control"
              placeholderr="Role"
              style="text-align: left"
            >
              <p><b>Role :</b> Nothing</p>
            </div>
          </div>
          <div class="form-group">
            <div
              class="form-control"
              placeholderr="Team"
              style="text-align: left"
            >
              <p><b>Team :</b> Nothing</p>
            </div>
          </div>
          <button type="button" v-on:click="Disconnect" class="btn btn-primary">
            Disconnect
          </button>
        </form>
      </div>
    </div>
    <br /><br /><br />
  </div>
</template>

<script>
export default {
  name: "MyAccount",
  data() {
    return {
      selected: "A",
      options: [
        { text: "Un", value: "A" },
        { text: "Deux", value: "B" },
        { text: "Trois", value: "C" },
      ],
    };
  },
  methods: {
    Disconnect() {
      localStorage.clear();
    },
    Skills() {
      this.$router.push({ name: "SkillManager" });
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2vw;
  width: 30vw;
  height: 35vw;
  border-radius: 2vw;
  overflow: hidden;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.2);
  background-color: #1f2224;
}

.container h1 {
  font-size: 1vw;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: -3vw 0 2vw;
  font-family: "Montserrat", sans-serif;
}
.overlay-container {
  top: 8vw;
  left: 10vw;
  width: 20vw;
}
button {
  border-radius: 20px;
  background-color: #dfc824;
  color: #fff;
  margin-top: 1.5vw;
  font-size: 1vw;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: 0;
  font-family: "Montserrat", sans-serif;
}
.form-control {
  background-color: transparent;
  color: white;
  border: 0;
  border-bottom: 2px solid #dfc824;
}
input::placeholder {
  color: #dfc824;
}
input {
  background-color: white;
}
</style>