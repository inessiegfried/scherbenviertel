<script>
    import imgUrl from "/img/ines2.jpg";
    import TwoCols from "@components/TwoCols.svelte";
</script>

<TwoCols id="vita" title="Vita">
    {#snippet first()}
        <img src={imgUrl} alt="Bild der Authorin" />
    {/snippet}
    {#snippet second()}
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
            <li>Die Autorin lebt in Basel.</li>
            <li>SCHERBENVIERTEL ist ihr literarisches Debut.</li>
        </ul>
    {/snippet}
</TwoCols>

<style>
    li {
        margin-bottom: 1em;
    }
    ul {
        padding-left: 0;
        margin-block: 2em;
    }
</style>
