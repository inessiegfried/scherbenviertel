<script>
import FlyerUmbruch from "@pdfs/Flyer-Umbruch.pdf?url";
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
          <span>Dienstag, 5. Mai 2026</span>
          <span>19.30 Uhr</span>
        </div>
        <div slot="body">
          <p>
            Am Literaturfestival LITERATUR IN DER TRAFOHALLE
          </p>
          <a
            href="https://trafohalle.ch/programm/literatur/"
            target="_blank">Link zur Veranstaltung</a>
        </div>

      </Card>
      <Card>
        <div slot="header">
          <span>Sonntag, 17. Mai 2026</span><span>17.30 Uhr</span>
        </div>
        <div slot="body">
          <p>Bei "Wort für Wort in einem Zug" in Bubendorf.</p>
          <div>
            <a href={FlyerUmbruch} target="_blank">Flyer</a>
          </div>
        </div>
      </Card>
    </CardContainer>
  {/snippet}
</TwoCols>


