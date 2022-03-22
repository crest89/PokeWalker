<template>
</template>

<script>
import { uuid } from 'uuidv4'
import { addDoc, collection } from '~/src/plugins/firebase.js'

export default {
   data() {
    return {
      trainer:{
          uuid: '',
      }
    }
  },
  mounted() {
    window.onload = ()=> {
      const id = uuid()
      console.log(id)
    }
  },
}
</script>
