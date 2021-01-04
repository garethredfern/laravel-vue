<template>
  <div class="max-w-sm p-5 m-auto">
    <article class="text-lg text-center">
      <p>Welcome to the Laravel Vue Demo app.</p>
      <p>
        You can register for an account
        <router-link to="/register" class="text-blue-500">here</router-link>.
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
