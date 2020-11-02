<template>
  <div>
    <div>
      <button @click="loginUser">Login 1</button>
      <button @click="loginUser2">Login 2</button>
    </div>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item }}
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      user: {},
      items: []
    }
  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        // console.log(response.data);
        this.user = response.data;
        
        if (response.data.username === 'Bret') {
          axios.get('https://jsonplaceholder.typicode.com/todos')
          .then(response => {
            // console.log(response.data);
            this.items = response.data;
          })
        }
      })
    },
    async loginUser2() {
      let response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      if (response.data.username === 'Bret') {
        console.log(response.data);
        this.user = response.data;
        let list = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(list.data);
        this.items = list.data;
      }
    }
  },
}
</script>

<style>

</style>