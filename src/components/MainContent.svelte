<script>
  import Router from "svelte-spa-router";
  export let routes;
</script>

<main>
  <Router {routes} />
</main>

<style>
  main {
    overflow-y: scroll;
    max-height: calc(100vh - var(--header-height) - var(--footer-height));
    padding: 2rem;
    margin: auto;
  }
</style>
