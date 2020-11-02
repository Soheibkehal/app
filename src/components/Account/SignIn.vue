<template>
  <div class="container">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <h1>SignIn</h1>
    <div class="overlay-container">
      <form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            
            id="FirstName"
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            id="Lastname"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            class="form-control"
            
            id="exampleInputPassword1"
          />
        </div>
       <button v-on:click="signIn" type="button" class="btn btn-primary">Sign In</button>
       
      </form>
       
      
    </div>
  </div>
  
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: "Signin",
  data(){
    return {
      userName:'',
      userid:''
    }
  },
  methods:{
    async signIn() {
      await axios.get(`http://localhost:4000/api/users/2`)
       .then(Response => this.userid = Response.data.data.id);
      await axios.get(`http://localhost:4000/api/users/2`)
       .then(Response => this.UserName = Response.data.data.fname);          
      localStorage.setItem('userid', this.userid);
      localStorage.setItem('UserName', this.UserName);
      
    },
    
  }
  
};
</script>


<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 1vw;
  width: 30vw;
  height: 30vw;
  border-radius: 2vw;
  overflow: hidden;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.2);
  background-color: #1f2224;
;
}
.container h1 {
  text-align: center;
  font-size: 1vw;
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 1vw 0 2vw;
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
  font-size: 1vw;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border : 0;
}
.form-group {
  border: 10px;
  overflow: hidden;
  
}
.form-control{
  background-color: transparent;
  color : white;
  border: 0;
  border-bottom: 2px solid #dfc824;
}
input::placeholder{
  color : #dfc824;
}
input{
  background-color:white;
}
</style>