<script>
import FlyerDobleA from "@pdfs/Flyer-DobleA.pdf?url";
import FlyerOekolampad from "@pdfs/Flyer-Oekolampad.pdf?url";
import Card from "@components/Card.svelte";
import CardContainer from "@components/CardContainer.svelte";
import TwoCols from "@components/TwoCols.svelte";
import Detail from "@components/Details.svelte";

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
    <CardContainer>
      <Card>
        <div slot="header">
          <span>Samstag, 25. Oktober 2026</span>
          <span>16:30 Uhr</span>
        </div>
        <div slot="body">
          <p>In der LesBar am Buch- und Literaturfestival Zürich liest, Pestalozzi-Bibliothek, Zähringerstrasse 17, Zürich</p>
          <p><a
            href="https://www.zuerich-liest.ch/veranstaltung/lesbar--femscript-autorinnen-stellen-ihre-neuerscheinungen-vor/20261024163000/"
            target="_blank">Link zur Veranstaltung</a></p>
        </div>
      </Card>
      <Card>
        <div slot="header">
          <span>Dienstag, 3. November 2026</span>
          <span>18:15 Uhr</span>
        </div>
        <div slot="body">
          <p> Öffentliche Buchpräsentation der historischen Erzählung <span
            class="italic">Scherbenviertel</span> an der Universität Zürich, Rämistrasse 71, Raum KOL-G-209 </p>
        </div>
      </Card>
      <Card>
        <div slot="header">
          <span>Dienstag, 5. November 2026</span>
          <span>19:30 Uhr</span>
        </div>
        <div slot="body">
          <p>Im Quartierzentrum <span class="italic">Oekolampad</span>, Allschwilerplatz 22, Basel</p>
          <p>
            Doppellesung und Gespräch zusammen mit Silke Amberg,  veranstaltet von der
            Buchhandlung <span class="italic">Olymp und Hades</span>
          </p>
          <p><a href={FlyerOekolampad} target="_blank">Flyer</a></p>
        </div>
      </Card>
      <Card>
        <div slot="header">
          <span>Freitag, 13. November 2026</span>
          <span>19:00 Uhr</span>
        </div>
        <div slot="body">
          <p>Im Kulturraum Doble A, Elsässerstrasse 8, Basel</p>

          <p>Anlässlich der Ausstellung Spurensuche -  Fotografien und Objekte
            von Christine Seiler</p>
          <p><a href={FlyerDobleA} target="_blank">Flyer</a></p>
        </div>
      </Card>
      <Card>
        <div slot="header">
          <span>Samstag, 21. November 2026</span>
          <span>18:00 Uhr</span>
        </div>
        <div slot="body">
          <p>Mit musikalischer Kommentierung durch das trio <span
            class="italic">someāl</span> im Evangelischen Gemeindehaus in Bad Säckingen </p>
        </div>
      </Card>
    </CardContainer>
    <!-- <p class="keine-lesungen">Weitere Lesungen sind in Planung.</p> -->
    <div class="bisherige-wrapper">
    <Detail open={false}>
      {#snippet summary()}
        <summary>Bisherige Lesungen</summary>
      {/snippet}
      {#snippet content()}
        <div class="lesungen-table-wrapper">
          <table class="lesungen-table">
            <thead>
              <tr>
                <th>Datum</th>
                <th>Veranstaltung</th>
                <th>Ort</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>17. Oktober 2025</td>
                <td>Vernissage</td>
                <td>Allgemeine Lesegesellschaft Basel</td>
              </tr>
              <tr>
                <td>26. Oktober 2025</td>
                <td>Herbstlese, Neuerscheinungen aus der Region Basel</td>
                <td>Allgemeine Lesegesellschaft Basel</td>
              </tr>
              <tr>
                <td>29. Oktober 2025</td>
                <td>Jazz und Lesung mit dem Günther-Schürmann Duo</td>
                <td>Theodorskirche Basel</td>
              </tr>
              <tr>
                <td>19. November 2025</td>
                <td>Lesung vor Ort</td>
                <td>Bürgerliches Waisenhaus Basel</td>
              </tr>
              <tr>
                <td>25. Januar 2026</td>
                <td>Lesung mit Gesang des trio someal</td>
                <td>Buchhandlung Merkel, Grenzach</td>
              </tr>
              <tr>
                <td>29. Januar 2026</td>
                <td>Lesung in der Rössli Buchhandlung</td>
                <td>Riehen</td>
              </tr>
              <tr>
                <td>4. Februar 2026</td>
                <td>Debüt-Abend in der Kantonsbibliothek Baselland</td>
                <td>Liestal</td>
              </tr>
              <tr>
                <td>26. Februar 2026</td>
                <td>Lesung und Gespräch an der Merkurstrasse 45</td>
                <td>Zürich</td>
              </tr>
              <tr>
                <td>3. März 2026</td>
                <td>Lesung und Gespräch im Wohn- und Pflegezentrum Zum Lamm</td>
                <td>Basel</td>
              </tr>
              <tr>
                <td>13. März 2026</td>
                <td>Lesung in der Zunft zur fünften Jahreszeit</td>
                <td>Bern</td>
              </tr>
              <tr>
                <td>16. April 2026</td>
                <td>Lesung in der GGG-Stadtbibliothek im Schmiedenhof</td>
                <td>Basel</td>
              </tr>
              <tr>
                <td>26. April 2026</td>
                <td>Lesung mit Gesang des trio someal</td>
                <td>Buchhandlung Merkel, Rheinfelden</td>
              </tr>
              <tr>
                <td>17. Mai 2026</td>
                <td>Lesung bei Wort für Wort in einem Zug</td>
                <td>Bubendorf</td>
              </tr>
              <tr>
                <td>4. September 2026</td>
                <td>Lesung im Pulpo</td>
                <td>Basel</td>
              </tr>
              <tr>
                  <td>11. September 2026</td><td>Lesung vor Ort für die MitarbeiterInnen der Bibliothek Reinach</td><td>Bürgerliches Waisenhaus Basel</td> 
                </tr>
            </tbody>
          </table>
        </div>
      {/snippet}
    </Detail>
    </div>
  {/snippet}
</TwoCols>

<style>
  :global(#lesungen .second-col) {
    width: 90%;
  }

  .keine-lesungen {
    font-size: var(--font-size-base);
    color: var(--white, #fff);
    margin-block-end: var(--space-lg);
  }

  .bisherige-wrapper {
    width: 100%;
    margin-bottom: 2rem;
  }

  .bisherige-wrapper :global(summary) {
    font-size: 1em;
    font-weight: 400;
  }

  .lesungen-table-wrapper {
    container-type: inline-size;
    container-name: lesungen;
    width: 100%;
  }

  .lesungen-table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--font-size-base);
    table-layout: fixed;
  }

  .lesungen-table th:nth-child(1),
  .lesungen-table td:nth-child(1) {
    width: 22%;
    white-space: nowrap;
  }

  .lesungen-table th:nth-child(2),
  .lesungen-table td:nth-child(2) {
    width: auto;
  }

  .lesungen-table th:nth-child(3),
  .lesungen-table td:nth-child(3) {
    width: 22%;
    overflow-wrap: break-word;
    word-break: break-word;
  }

  .lesungen-table thead tr {
    background-color: hsl(from var(--teal) h s l / 0.2);
  }

  .lesungen-table th {
    color: var(--yellow);
    text-align: left;
    padding: var(--space-3xs) var(--space-sm);
    font-weight: 600;
    border-bottom: 1px solid hsl(from var(--teal) h s l / 0.4);
  }

  .lesungen-table td {
    padding: var(--space-3xs) var(--space-sm);
    border-bottom: 1px solid hsl(from var(--teal) h s l / 0.15);
    vertical-align: top;
  }

  .lesungen-table td:first-child {
    color: var(--yellow);
    font-size: var(--font-size-sm);
    padding-top: calc(var(--space-3xs) + 0.15em);
    overflow-wrap: break-word;
  }

  .lesungen-table tbody tr {
    transition: background-color var(--transition-fast);
  }

  .lesungen-table tbody tr:hover {
    background-color: hsl(from var(--teal) h s l / 0.08);
  }

  /* Responsive: schmale Container → gestapelte Zeilen */
  @container lesungen (max-width: 560px) {
    .lesungen-table thead {
      display: none;
    }

    .lesungen-table,
    .lesungen-table tbody,
    .lesungen-table tr,
    .lesungen-table td {
      display: block;
      width: 100%;
    }

    .lesungen-table th:nth-child(1),
    .lesungen-table td:nth-child(1),
    .lesungen-table th:nth-child(2),
    .lesungen-table td:nth-child(2),
    .lesungen-table th:nth-child(3),
    .lesungen-table td:nth-child(3) {
      width: 100%;
    }

    .lesungen-table tr {
      padding-block: var(--space-xs);
      border-bottom: 1px solid hsl(from var(--teal) h s l / 0.3);
    }

    .lesungen-table td {
      border-bottom: none;
      padding: var(--space-3xs) var(--space-sm);
    }

    .lesungen-table td:first-child {
      font-size: var(--font-size-sm);
      padding-bottom: 0;
    }
  }
</style>


