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
    justify-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10%;
    max-width: calc(800px + 240px);
}

.img-with-header {
    max-width: 400px;
    min-width: 200px;
    text-align: center;
    
    > img {
        width: 100%;
    }

    > h2 {
        padding: 0;
        margin: 0;
    }
}

@media (max-width: 600px) {
    #grid {
        flex-direction: column-reverse;
        margin-top: 30px;
    }

    .img-with-header {
        text-align: center;

        > img {
            width: 80%;
        }
    }

}
</style>
