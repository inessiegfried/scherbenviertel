<script>
  import imgUrl from "@img/haus.png?url"
  import TwoCols from "@components/TwoCols.svelte"
</script>

<TwoCols>
    <div slot="first">
        <h2 class="hide-sm">Ines Siegfried</h2>
        <img src={imgUrl} alt="Bild der Authorin"/>
    </div>
    <section slot="second">
        <p class="italic">
            Er war ein Spurius, das uneheliche Kind einer Glätterin, der Enkel
            geschiedener Grosseltern, kam aus einem Scherbenviertel und wollte
            nicht dankbar dafür sein, dass für seine Zukunft gesorgt worden
            war. Konnte nicht zufrieden sein, dass der Waisenvater das für ihn
            Menschenmögliche getan hatte. Jakob schüttelte über sich selbst den
            Kopf.
        </p>
        <p>
            Im Herbst 2025 erscheint die historische Erzählung SCHERBENVIERTEL
            im eFeF-Verlag.
        </p>

    </section>
</TwoCols>
