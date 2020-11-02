<template>
  <div class="container">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <h1>SKILLS</h1>
    <div class="overlay-container">
      <ul id="example-1">
        <li v-for="item in items" :key="item.message">
          {{ item.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillManager",
  date() {
    return {
      items: [
          
          { message: "Foo" },
          { message: "Bar" }
           
        ],
    };
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
  margin: -20vw 0 2vw;
  font-family: "Montserrat", sans-serif;
}
.overlay-container {
  top: 8vw;
  left: 10vw;
  width: 20vw;
}
</style>