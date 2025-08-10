<script>
import {link} from "svelte-spa-router"
</script>

<footer>
    <a use:link href="/kontakt">Scherbenviertel - Ines Siegfried</a>
</footer>

<style>
  footer {
    height: var(--footer-height);
    background-color: var(--purple);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
  }

  a {
    color: var(--white);
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: var(--purple-light);
  }
</style>
