<template>
  <div>
    <h2>Verify Email</h2>
    <ul>
      <li>id: {{ $route.params.id }}</li>
      <li>hash: {{ $route.params.hash }}</li>
    </ul>
    <button @click="verifyEmail">Verify</button>
  </div>
</template>

<script>
import axios from "axios";

axios.defaults.withCredentials = true;

export default {
  methods: {
    async verifyEmail() {
      const id = this.$route.params.id;
      const hash = this.$route.params.hash;
      const expires = this.$route.query.expires;
      const signature = this.$route.query.signature;
      await axios.get(
        `http://localhost:8080/email/verify/${id}/${hash}?expires=${expires}&signature=${signature}`
      );
    },
  },
};
</script>
