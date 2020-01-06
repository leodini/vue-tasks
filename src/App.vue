<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Login from './components/Auth/Login'
import Todo from './components/Todo'
// import Signup from './components/Auth/Signup'
export default {
  name: 'app',
  components: {
    Todo
    // Signup
  }
}
</script>

