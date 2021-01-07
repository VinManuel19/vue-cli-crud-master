<template>
<div>
  <v-app-bar
  dense
  flat
  prominent
></v-app-bar>
  <Login/>
  <LoginC/>
  <Crearaso/>
  <Depositar/>
  <Retiro/>
</div>
</template>

<script>
import Login from './components/Login';
import LoginC from './components/LoginC';
import Crearaso from './components/Crearaso';
import Depositar from './components/Depositar';
import Retiro from './components/Retiro';


export default {
  name: 'App',
  components: {
    Login,
    LoginC,
    Crearaso,
    Depositar,
    Retiro
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   text-align: center;
}
</style>
