<template>
</template>

<script lang ="js">
import { uuid } from 'uuidv4'
import  fb  from "~/plugins/firebase";
import { addDoc, collection, getDocs } from 'firebase/firestore';

const db = fb
export default {
   data() {
    return {
      trainer:{
          userId: '',
      }
    }
  },
  mounted() {
    window.onload = ()=> {
      const userId = uuid()
        console.log(userId)
        try {
          const docRef =  addDoc(collection(db, 'trainer'), {
            id:userId
          });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
  }
}
</script>
