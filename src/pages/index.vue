<template>
  <button  v-on:click="getRandomNum">{{ randamNum }}{{ pokemon }}</button>
</template>

<script lang ="js">
import { customAlphabet } from 'nanoid'
import  fb  from "~/plugins/firebase";
import { addDoc, collection, getDocs } from 'firebase/firestore';

const db = fb
export default {
   data() {
    return {
      randamNum: '',
      pokemon: ''
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
  },
  methods: {
     getRandomNum: function(min, max) {
        min = Math.ceil(1);
        max = Math.floor(898);
        return this.randamNum = Math.floor(Math.random() * (max - min + 1) + min);
        this.$store.dispatch('fetchPokeData', randamNum);
        this.pokemon = this.$store.state.species
        console.log(this.$store.state.species)

        //async fetch() {
          //this.pokemons = await fetch("https://pokeapi.co/api/v2/pokemon")
          //.then(res => res.json())
          //console.log(this.pokemons)
        //}
    }
  },
}
</script>
