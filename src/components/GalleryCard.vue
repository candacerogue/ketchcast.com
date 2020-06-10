<template>
    <div class="e__g__card">
      <img
        :src="url"
        :title="title"
        :alt="title"
      >
    </div>
  </template>
  
  <script>
  export default {
    name: 'gallery-card',
  
    props: {
      title: {
        type: String,
        required: false,
        default: ''
      },
  
      caption: {
        type: String,
        required: false,
        default: ''
      },
  
      url: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style lang="scss">
.e__g__card {
  align-items: center;
  display: flex;
  height: 20vh;
  justify-content: center;
  /* padding: 0 32px; */

  img {
    max-height: 20vh;
    max-width: 20vw;
    object-fit: cover;
  }
}

  </style>
  