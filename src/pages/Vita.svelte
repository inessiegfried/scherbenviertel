<script>
  import imgUrl from "/img/ines2.jpg"
</script>

<div id="grid">
    <div class="img-with-header">
        <img src={imgUrl} />
    </div>
    <section>
        <ul>
            <li>
                Ines Siegfried, geboren 1963 in Basel, studierte Deutsch,
                Geschichte, Kunstgeschichte, Journalistik und
                Kommunikationswissenschaft in Basel, Bern und Freiburg und
                promovierte über den expressionistischen Dichter Alfred
                Lichtenstein.
            </li>
            <li>
                Sie arbeitete als Radiomoderatorin, Kulturjournalistin,
                Gymnasiallehrerin und Dozentin in Bern und unterrichtet seit 14
                Jahren Deutsch und Geschichte am Gymnasium Muttenz.
            </li>
            <li>
                Die Autorin lebt in Basel.
            </li>
            <li>
                SCHERBENVIERTEL ist ihr literarisches Debut.
            </li>
        </ul>
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
