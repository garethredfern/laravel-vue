<template>
  <div class="max-w-lg p-5 m-auto">
    <article class="p-5">
      <h2
        class="mb-2 text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500"
      >
        Laravel Vue Demo SPA.
      </h2>
      <p class="font-bold">
        You can register for an account
        <router-link to="/register" class="underline hover:no-underline"
          >here</router-link
        >.
      </p>
    </article>
    <article class="p-5 mt-5 text-gray-600">
      <p>
        Docs on how this application is built can be found at:
        <a
          href="https://laravelvuespa.com/"
          class="underline hover:no-underline font-bold text-gray-900"
          >laravelvuespa.com</a
        >
      </p>
    </article>
  </div>
</template>
