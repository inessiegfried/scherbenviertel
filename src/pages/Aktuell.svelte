<script>
    import imgUrl from "@img/haus.png?url";
    import TwoCols from "@components/TwoCols.svelte";
</script>

<TwoCols id="aktuell" title="Aktuell">
    {#snippet first()}
        <div class="img-wrapper">
            <img src={imgUrl} alt="Bild vom Waisenhaus" />
            <p class="italic small-text">
                Waisenknaben im Hof des Waisenhauses um 1870. Staatsarchiv
                Basel-Stadt. StABS, AL 45, 1-58.
            </p>
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
            Die historische Erzählung SCHERBENVIERTEL ist soeben im eFeF-Verlag
            erschienen.
        </p>
    {/snippet}
</TwoCols>
