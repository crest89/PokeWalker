<template>
  <div>
    <button  v-on:click="getPokemon">{{ name }}</button>
    <img v-bind:src="form" alt="">
  </div>
</template>

<script lang ="js">
import { customAlphabet } from 'nanoid'
import  fb  from "~/plugins/firebase";
import { addDoc, collection, getDocs } from 'firebase/firestore';
import axios from 'axios'

const db = fb
export default {
   data: function () {
    return {
      randamNum: '',
      pokemon: null,
      species: null,
      englishName: null,
      name: null,
      genera: null,
      form: null,
      //type: null,
      //flavorText: null,
      local: 'ja-Hrkt'
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
    getPokemon: async function() {
      const randamNum = Math.floor(Math.random() * (898 - 1) + 1);
      try{
        const resulte1 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${randamNum}`)
        this.species = resulte1.data
        const resulte2 = await axios.get(resulte1.data.varieties[0].pokemon.url)
        this.pokemon = resulte2.data
        const resulte3 = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${randamNum}`)
        this.forms = resulte3.data
        this.getI18nName()
        this.getI18nGenera()
        this.getFormUrl()
        this.getTypes()
        this.getI18nFlavorText()
        //this.habitat = this.species.pal_park__encounters[0].area.name
      } catch {
        alert('通信エラーが発生しました')
      }
    },

    getI18nName: function() {
      const names = this.species.names
      const result = names.find(v => v.language.name === this.local)
      this.name = result.name
    },
    getI18nGenera: function() {
      const genera = this.species.genera
      const result = genera.find(v => v.language.name === this.local)
      this.genera = result.genus
      console.log(result.genus)
    },
    getFormUrl: function() {
      const formUrl = this.forms.sprites.front_default
      this.form = formUrl
      console.log(formUrl)
    },
     getTypes: async function () {
      const urls = []
      for (const type of this.pokemon.types) {
        urls.push(type.type.url)
      }
      const types = await Promise.all(urls.map(axios.get))
      this.getI18nType(types)
      },
     getI18nType: function(types) {
      let result_types = ''
      for (const type of types) {
        const type_name = type.data.names.find(v => v.language.name === this.local)
        result_types += `《${type_name.name}》`
      }
      this.type = result_types
    },
    getI18nFlavorText: function() {
      const flavor_text_entries = this.species.flavor_text_entries;
      const result = flavor_text_entries.find(v => v.language.name === this.local);
      this.flavorText = result.flavor_text;
    },

  }
}
</script>
