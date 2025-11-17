<script>
    import FlyerWaisenhausURL from "@pdfs/Flyer-Waisenhaus.pdf?url";
    import FlyerRegion from "@pdfs/Flyer-Region.pdf?url";
    import Card from "@components/Card.svelte";
    import TwoCols from "@components/TwoCols.svelte";

    import imgUrl from "@img/ines4.jpg?url";
    import imgVernissage from "@img/ines-vernissage.jpg?url";
    import ImageSwitcher from "../components/ImageSwitcher.svelte";
</script>

<TwoCols id="lesungen" title="Lesungen" breakout={true}>
    {#snippet first()}
        <!-- <img src={imgVernissage} alt="Bild der Authorin" /> -->
        <ImageSwitcher images={[imgUrl, imgVernissage]} />
    {/snippet}
    {#snippet second()}
        <div class="card-container">
            <Card>
                <div slot="header">
                    <span>Mittwoch, 19. November 2025</span><span
                        >19.00 Uhr</span
                    >
                </div>
                <div slot="body">
                    Im Kartäusersaal des Bürgerlichen Waisenhauses Basel.
                    <div>
                        <a href={FlyerWaisenhausURL} target="_blank">Flyer</a>
                    </div>
                </div>
            </Card>
            <Card>
                <div slot="header">
                    <span>Sonntag, 25. Januar 2026</span><span>16.00 Uhr</span>
                </div>
                <div slot="body">
                    <p>
                        Mit musikalischer Kommentierung durch das <span
                            class="italic">trio someāl</span
                        > in der Buchhandlung Merkel in Grenzach.
                    </p>
                    <div>
                        <a
                            href="https://buchhandlung-merkel.de/event/lesung-mit-ines-siegfried/"
                            target="_blank">Lesung</a
                        >
                    </div>
                </div>
            </Card>

            <Card>
                <div slot="header">
                    <span>Donnerstag, 29. Januar 2026</span><span
                        >19.30 Uhr</span
                    >
                </div>
                <div slot="body">
                    <p>In der Rössli Buchhandlung in Riehen.</p>
                    <div>
                        <a href={FlyerRegion} target="_blank">Flyer</a>
                    </div>
                </div>
            </Card>

            <Card>
                <div slot="header">
                    <span>Mittwoch, 4. Februar 2026</span><span>19.30 Uhr</span>
                </div>
                <div slot="body">
                    In der Kantonsbibliothek Baselland, Liestal.
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
