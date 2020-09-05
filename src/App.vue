<template>
  <div id="app">
    <Header />
    <About />
    <WorkingWithOthers />
    <WorkingWithMe />
    <Connect />
    <FollowMe />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import About from './components/About.vue'
  import WorkingWithOthers from './components/WorkingWithOthers.vue'
  import WorkingWithMe from './components/WorkingWithMe.vue'
  import Connect from './components/Connect.vue'
  import FollowMe from './components/FollowMe.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      About,
      WorkingWithOthers,
      WorkingWithMe,
      Connect,
      FollowMe,
      Footer
    }
  }
</script>

<style>
  html,
  body {
    width: auto !important;
    overflow-x: hidden !important;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
  }
</style>