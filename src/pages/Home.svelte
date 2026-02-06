<script>
    import imgUrl from "@img/ines-gross.jpg?url";
    import TwoCols from "@components/TwoCols.svelte";
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
    :global(#home.two-cols) {
        height: calc(100dvh - var(--header-height)) !important;
        min-height: calc(100dvh - var(--header-height)) !important;
        max-height: calc(100dvh - var(--header-height)) !important;
        align-items: center !important;
    }
    
    :global(#home.two-cols .first-col) {
        position: static !important;
        margin-block: 0 !important;
        align-self: center !important;
    }

    .img-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .img-wrapper > img {
        width: clamp(240px, 100%, 840px);
        min-height: 400px;
        object-fit: cover;
        object-position: center;
    }
</style>
