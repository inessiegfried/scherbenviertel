<script>
    import imgUrl from "@img/ines-gross.jpg?url";
    import TwoCols from "@components/TwoCols.svelte";
    import { link } from "svelte-spa-router";
</script>

<TwoCols id="home" title="Ines Siegfried">
    {#snippet first()}
        <div class="img-wrapper">
            <img src={imgUrl} alt="Bild der Authorin" />
        </div>
    {/snippet}
    {#snippet second()}
        <ul>
            <li><a href="#aktuell">Aktuell</a></li>
            <li><a href="#scherbenviertel">Scherbenviertel</a></li>
            <li><a href="#lesungen">Lesungen</a></li>
            <li><a href="#gedanken">Geschichten</a></li>
            <li><a href="#vita">Vita</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
        </ul>
    {/snippet}
</TwoCols>

<style>
    .img-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .img-wrapper > img {
        width: clamp(240px, 100%, 640px);
        min-height: 400px;
        object-fit: cover;
        object-position: center;
    }
</style>
