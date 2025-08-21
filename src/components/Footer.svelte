<script>
import {link} from "svelte-spa-router"
</script>

<footer>
    <a use:link href="/kontakt">Scherbenviertel - Ines Siegfried</a>
</footer>

<style>
  footer {
    height: var(--footer-height);
    background-color: var(--base-color);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }

  a {
    color: var(--title-color);
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: var(--base-color-light);
  }
</style>
