<script>
    import FlyerKeller from "@pdfs/Flyer-keller.pdf?url";
    import Card from "@components/Card.svelte";
    import CardContainer from "@components/CardContainer.svelte";
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
        <CardContainer gap="lg" marginBlock="2xl">
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
                    <p>
                    In der GGG Stadtbibliothek im Schmiedenhof in Basel.
                    </p>
                    <a
            href="https://www.stadtbibliothekbasel.ch/de/ines-siegfried-scherbenviertel-_content---1--1007--3852.html"
            target="_blank">Link zur Veranstaltung</a>
                </div>
            </Card>
        </CardContainer>
    {/snippet}
</TwoCols>


