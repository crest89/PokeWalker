<template>
</template>

<script lang ="js">
import { customAlphabet } from 'nanoid'
import  fb  from "~/plugins/firebase";
import { addDoc, collection, getDocs } from 'firebase/firestore';

const db = fb
export default {
   data() {
    return {

    }
  },

  mounted() {
    window.onload = ()=> {
      if (this.$store.state.id === null) {
        const nanoid = customAlphabet('1234567890abcdefghijklmnopqestuvwxyz_', 40);
        const id = nanoid();
        this.$store.dispatch('saveTrainerId', id)
        try {
          const docRef = addDoc(collection(db, 'trainer'), {
            trainer_id: this.$store.state.id,
            time: new Date(),
          });
          console.log("Document written with ID: ", docRef.id)
        } catch(e) {
          console.error("Error adding document: ", e);
        }
      }
    }
  }
}
</script>
