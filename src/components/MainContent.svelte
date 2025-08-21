<script>
  import Router from "svelte-spa-router";
  export let routes;
</script>

<main>
  <Router {routes} />
</main>

<style>
  main {
    max-height: var(--body-height);
    padding: 2rem;
    margin-block: 0;
  }
</style>
