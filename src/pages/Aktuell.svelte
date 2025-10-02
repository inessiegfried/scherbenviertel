<script>
    import imgUrl from "@img/haus.png?url";
    import TwoCols from "@components/TwoCols.svelte";
</script>

<TwoCols id="aktuell" title="Aktuell">
    {#snippet first()}
        <div class="img-wrapper">
            <img src={imgUrl} alt="Bild vom Waisenhaus" />
        </div>
    {/snippet}
    {#snippet second()}
        <p class="italic">
            Er war ein Spurius, das uneheliche Kind einer Glätterin, der Enkel
            geschiedener Grosseltern, kam aus einem Scherbenviertel und wollte
            nicht dankbar dafür sein, dass für seine Zukunft gesorgt worden war.
            Konnte nicht zufrieden sein, dass der Waisenvater das für ihn
            Menschenmögliche getan hatte. Jakob schüttelte über sich selbst den
            Kopf.
        </p>
        <p>
            Im Herbst 2025 erscheint die historische Erzählung SCHERBENVIERTEL
            im eFeF-Verlag.
        </p>
    {/snippet}
</TwoCols>
