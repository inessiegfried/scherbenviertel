<script>
  import imgUrl from "/img/ines2.jpg"
  import TwoCols from "@components/TwoCols.svelte"
</script>

<TwoCols>
    <div slot="first">
        <img src={imgUrl} alt="Bild der Authorin" />
    </div>
    <section slot="second">
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
</TwoCols>

<style>
li { margin-bottom: 1em;}
</style>

