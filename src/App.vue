<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div id="nav"><router-link to="/login">Login</router-link> |</div>
    <router-view />
  </div>
</template>

<style>
html,
body {
  background-color: #161617;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
body {
  margin: 0;
}
p,
input::placeholder {
  font-family: "Lato", sans-serif;
}
h1,
h2,
h3 {
  font-family: "Montserrat", sans-serif;
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
  border: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dfc824;
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
</style>
