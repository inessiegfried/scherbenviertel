<script>
  import Router from "svelte-spa-router";
  export let routes;
</script>

<main>
  <Router {routes} />
</main>

<style>
  main {
    height: var(--body-height);
    margin-block: 0;
  }
</style>
