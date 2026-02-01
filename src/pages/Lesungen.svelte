<script>
    import FlyerLokalLesen from "@pdfs/Flyer-lokal-lesen.pdf?url";
    import FlyerKeller from "@pdfs/Flyer-keller.pdf?url";
    import Card from "@components/Card.svelte";
    import TwoCols from "@components/TwoCols.svelte";

    import imgUrl from "@img/ines4.jpg?url";
    import imgVernissage from "@img/ines-vernissage.jpg?url";
    import imgSignieren from "@img/Signieren.jpg?url";
    import ImageSwitcher from "../components/ImageSwitcher.svelte";
</script>

<TwoCols id="lesungen" title="Lesungen" breakout={true}>
    {#snippet first()}
        <!-- <img src={imgVernissage} alt="Bild der Authorin" /> -->
        <ImageSwitcher images={[imgUrl, imgVernissage, imgSignieren]} />
    {/snippet}
    {#snippet second()}
        <div class="card-container">
            <Card>
                <div slot="header">
                    <span>Mittwoch, 4. Februar 2026</span><span>19.30 Uhr</span>
                </div>
                <div slot="body">
                    <p>In der Kantonsbibliothek Baselland, Liestal.</p>
                    <div>
                        <a href={FlyerLokalLesen} target="_blank">Flyer</a>
                    </div>
                </div>
            </Card>

            <Card>
                <div slot="header">
                    <span>Freitag, 13. März 2026</span><span>19.30 Uhr</span>
                </div>
                <div slot="body">
                    <p>In der Zunft zur fünften Jahreszeit in Bern.</p>
                    <div>
                        <a href={FlyerKeller} target="_blank">Flyer</a>
                    </div>
                </div>
            </Card>

            <Card>
                <div slot="header">
                    <span>Donnerstag, 16. April 2026</span><span>18.00 Uhr</span
                    >
                </div>
                <div slot="body">
                    In der GGG Stadtbibliothek im Schmiedenhof in Basel.
                </div>
            </Card>
        </div>
    {/snippet}
</TwoCols>

<style>
    .card-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-block: 3em;
    }
</style>
