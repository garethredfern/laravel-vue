<template>
  <div class="max-w-lg p-5 m-auto">
    <article class="p-5 text-lg text-center bg-white border rouned">
      <p>Welcome to the Laravel Vue Demo app.</p>
      <p>
        You can register for an account
        <router-link to="/register" class="text-blue-500">here</router-link>.
      </p>
    </article>
    <article class="p-5 mt-5 text-lg text-center bg-white border rounded">
      <p>
        Docs on how this application is built can be found at:
        <a href="https://laravelvuespa.com/" class="base-link"
          >laravelvuespa.com</a
        >
      </p>
    </article>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
