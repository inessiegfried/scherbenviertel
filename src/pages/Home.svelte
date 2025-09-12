<script>
  import imgUrl from "@img/ines-gross.jpg?url"
  import TwoCols from "@components/TwoCols.svelte"
  import {link} from "svelte-spa-router"
</script>

<TwoCols>
<div slot="first" class="img-wrapper">
    <h2 class="hide-sm">Ines Siegfried</h2>
    <img src={imgUrl} alt="Bild der Authorin"/>
</div>
<ul slot="second">
    <li><a href="/aktuell" use:link>Aktuell</a></li>
    <li><a href="/scherbenviertel" use:link>Scherbenviertel</a></li>
    <li><a href="/lesungen" use:link>Lesungen</a></li>
    <li><a href="/gedanken" use:link>Gedanken und Geschichten</a></li>
    <li><a href="/vita" use:link>Vita</a></li>
    <li><a href="/kontakt" use:link>Kontakt</a></li>
<ul>
</TwoCols>

<style>
.img-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-wrapper > img {
  width: clamp(240px, 80%, 640px);
  min-height: 400px;
  object-fit: cover;
  object-position: center;
}

</style>
