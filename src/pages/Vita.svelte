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
