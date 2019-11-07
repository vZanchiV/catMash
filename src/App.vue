<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Fight Chat</router-link>
      <router-link to="/allCats">Tous les chats</router-link>
    </div>
    <div class="container">
        <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
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
  padding:10px 30px;
}
</style>
