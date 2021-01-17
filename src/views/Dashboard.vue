<template>
  <div class="p-5 xl:px-0">
    <div class="grid gap-10 md:grid-cols-3">
      <ul class="p-5 bg-white border rounded shadow">
        <li>
          <router-link to="/user" class="base-link"> View Profile </router-link>
        </li>
      </ul>
    </div>
    <footer class="py-5">
      <p class="text-center text-gray-400">
        Full documentation for how this application is built can be found at
        <a href="https://laravelvuespa.com/" class="base-link"
          >laravelvuespa.com</a
        >
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>
