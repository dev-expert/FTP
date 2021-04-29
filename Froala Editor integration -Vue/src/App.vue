<template>
  <div id="app">
    <froala id="edit" :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>
</template>

<script>
// import VueFroala from 'vue-froala-wysiwyg';

export default {
  name: 'app',
  data () {
    return {
      config: {
        events: {
          initialized: function () {
            console.log('initialized')
          }
        }
      },
      model: 'Edit Your Content Here!'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
