<script>
  import imgUrl from "@img/ines.jpg?url"
</script>

<div id="grid">
    <div class="img-with-header">
        <h2>Ines Siegfried</h2>
        <img src={imgUrl} alt="Bild der Authorin"/>
    </div>
    <section>
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
</div>

<style>
#grid {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
    max-width: 840px;
}

.img-with-header > img {
    width: 100%;
}
</style>
