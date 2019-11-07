<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Cat Mash</router-link>
      <router-link to="/allCats">Classement</router-link>
    </div>
    <div class="container">
        <router-view/>
    </div>
  </div>
</template>

<style lang="scss" >
@import "./assets/scss/_variables.scss";

html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background:$color-gray-lightest;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin:0 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  
}
</style>
