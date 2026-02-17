<script>
    import imgUrl from "@img/ines-gross.jpg?url";
    import TwoCols from "@components/TwoCols.svelte";
</script>

<TwoCols id="home" title="Ines Siegfried" breakout={true} fullHeight={true}>
    {#snippet first()}
        <div class="wide img-wrapper">
            <img src={imgUrl} alt="Bild der Authorin" />
        </div>
    {/snippet}
    {#snippet second()}
      <section>
        <p class="italic">
            Nichts Schönres unter der Sonne als unter der Sonne zu sein.
        </p>
        <p>Ingeborg Bachmann</p>
      </section>
    {/snippet}
</TwoCols>

<style>


</style>
