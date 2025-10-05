<script>
    import imgUrl from "@img/ines-gross.jpg?url";
    import TwoCols from "@components/TwoCols.svelte";
    import { link } from "svelte-spa-router";
</script>

<TwoCols id="home" title="Ines Siegfried" breakout={true}>
    {#snippet first()}
        <div class="wide img-wrapper">
            <img src={imgUrl} alt="Bild der Authorin" />
        </div>
    {/snippet}
    {#snippet second()}
        <p class="italic">
            Nichts Schönres unter der Sonne als unter der Sonne zu sein.
        </p>
        <p>Ingeborg Bachmann</p>
    {/snippet}
</TwoCols>

<style>
    .img-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .img-wrapper > img {
        width: clamp(240px, 100%, 840px);
        min-height: 400px;
        object-fit: cover;
        object-position: center;
    }
</style>
