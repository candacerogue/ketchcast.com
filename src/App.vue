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
    head () {
      return {
        title: 'John Ketchum Website',
        meta: [
        { property: 'og:title', content: `John Ketchum Website` },
        { property: 'og:image', content: 'src/assets/JK-Header-Img.png' },
        { property: 'keywords', content: 'Journalism, Journalist, AJP, American Journalism Project, John Ketchum' },
        { property: 'og:url', content: 'https://ketchcast.com' },
        { property: 'og:description', content: 'Checkout John Ketchum here.' },
        { name: 'twitter:title', content: `John Ketchum Website` },
        { name: 'twitter:description', content: 'Checkout John Ketchum here.' },
        { name: 'twitter:image', content: 'src/assets/JK-Header-Img.png' }
      ]
      }
    },
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
    overflow-x: hidden !important;
    width: 100% !important;
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
  }
</style>