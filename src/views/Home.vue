<template>
  <div class="max-w-lg p-5 m-auto">
    <article class="p-5">
      <h1
        class="mb-2 text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500"
      >
        Laravel Vue Demo SPA.
      </h1>
      <p class="font-bold">
        You can register for an account
        <router-link to="/register" class="base-link">here</router-link>.
      </p>
    </article>
    <article class="p-5 mt-5 text-gray-600">
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
