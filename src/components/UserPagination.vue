<template>
  <BasePagination
    :links="links"
    @firstPage="firstPage"
    @prevPage="prevPage"
    @nextPage="nextPage"
    @lastPage="lastPage"
  />
</template>

<script>
import { mapGetters } from "vuex";
import BasePagination from "@/components/BasePagination";

export default {
  components: {
    BasePagination,
  },
  computed: {
    ...mapGetters("user", ["meta", "links"]),
  },
  methods: {
    firstPage() {
      this.$store.dispatch("user/getUsers", this.links.first).then(() => {
        this.$router.push({
          path: "users",
          query: { page: 1 },
        });
      });
    },
    prevPage() {
      this.$store.dispatch("user/getUsers", this.links.prev).then(() => {
        this.$router.push({
          path: "users",
          query: { page: this.meta.current_page },
        });
      });
    },
    nextPage() {
      this.$store.dispatch("user/getUsers", this.links.next).then(() => {
        this.$router.push({
          path: "users",
          query: { page: this.meta.current_page },
        });
      });
    },
    lastPage() {
      this.$store.dispatch("user/getUsers", this.links.last).then(() => {
        this.$router.push({
          path: "users",
          query: { page: this.meta.last_page },
        });
      });
    },
  },
};
</script>
