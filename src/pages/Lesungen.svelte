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
    <h3 class="lesungen-title">Bisherige Lesungen</h3>
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
          <tr class="past">
            <td>17. Oktober 2025</td>
            <td>Vernissage</td>
            <td>Allgemeine Lesegesellschaft Basel</td>
          </tr>
          <tr class="past">
            <td>26. Oktober 2025</td>
            <td>Herbstlese, Neuerscheinungen aus der Region Basel</td>
            <td></td>
          </tr>
          <tr class="past">
            <td>29. Oktober 2025</td>
            <td>Jazz und Lesung mit dem Günther-Schürmann Duo</td>
            <td>Theodorskirche Basel</td>
          </tr>
          <tr class="past">
            <td>19. November 2025</td>
            <td>Lesung im Bürgerlichen Waisenhaus Basel</td>
            <td></td>
          </tr>
          <tr class="past">
            <td>25. Januar 2026</td>
            <td>Lesung mit Gesang des trio someal</td>
            <td>Buchhandlung Merkel, Grenzach</td>
          </tr>
          <tr class="past">
            <td>29. Januar 2026</td>
            <td>Lesung in der Rössli Buchhandlung</td>
            <td>Riehen</td>
          </tr>
          <tr class="past">
            <td>4. Februar 2026</td>
            <td>Debüt-Abend in der Kantonsbibliothek Baselland</td>
            <td>Liestal</td>
          </tr>
          <tr class="past">
            <td>26. Februar 2026</td>
            <td>Lesung und Gespräch an der Merkurstrasse 45</td>
            <td>Zürich</td>
          </tr>
          <tr class="past">
            <td>3. März 2026</td>
            <td>Lesung und Gespräch im Wohn- und Pflegezentrum Zum Lamm</td>
            <td>Basel</td>
          </tr>
          <tr class="past">
            <td>13. März 2026</td>
            <td>Lesung in der Zunft zur fünften Jahreszeit</td>
            <td>Bern</td>
          </tr>
          <tr class="past">
            <td>16. April 2026</td>
            <td>Lesung in der GGG-Stadtbibliothek im Schmiedenhof</td>
            <td>Basel</td>
          </tr>
          <tr class="past">
            <td>26. April 2026</td>
            <td>Lesung mit Gesang des trio someal</td>
            <td>Buchhandlung Merkel, Rheinfelden</td>
          </tr>
          <tr class="past">
            <td>17. Mai 2026</td>
            <td>Lesung bei Wort für Wort in einem Zug</td>
            <td>Bubendorf</td>
          </tr>
        </tbody>
      </table>
    </div>
  {/snippet}
</TwoCols>

<style>
  .lesungen-title {
    color: var(--yellow);
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-block-end: var(--space-sm);
    text-align: center;
    width: 100%;
  }

  .lesungen-table-wrapper {
    container-type: inline-size;
    container-name: lesungen;
    margin-block: var(--space-lg);
    box-shadow: var(--shadow-teal);
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

  .lesungen-table tbody tr.past td {
    opacity: 0.55;
  }

  .lesungen-table tbody tr.past:hover td {
    opacity: 0.8;
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


