<script>
  import Router from "svelte-spa-router";
  export let routes;
</script>

<main class="main-container">
  <Router {routes} />
</main>

<style>
.main-container {
  overflow-y: scroll;
  height: var(--body-height);
  padding-top: var(--header-height);
  padding-inline: 0.5em;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
