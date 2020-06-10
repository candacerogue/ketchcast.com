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
    max-width: 100%;
    overflow-x: hidden;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
  }

  /* @font-face {
  font-family: 'DIN Bold';
  src: url('~@assets/fonts/DIN-BoldAlternate.woff2') format('woff2'),
  url('~@assets/fonts/DIN-BoldAlternate.woff') format('woff'),
  url('~@assets/fonts/DIN-BoldAlternate.ttf') format('ttf');
  font-weight: normal;
  font-style: normal;
} */
</style>