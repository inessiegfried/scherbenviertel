<script>
  import FlyerURL from "@pdfs/Flyer-TheoSounds.pdf?url"
</script>


<ul>
  <li class="card">
    <div class="card-header"><span>Sonntag, 26. Oktober</span><span>17.00 Uhr</span></div>
    <div class="card-body">
      <div>Herbst-Neuerscheinungen</div>
      <div>organisiert von lokal lesen in der Allgemeinen
        Lesegesellschaft Basel</div>
    </div>
  </li>
  <li class="card">
    <div class="card-header">
      <span>Mittwoch, 29. Oktober 2025</span><span>19.30 Uhr</span>
    </div>
    <div class="card-body">
      <div>
     mit musikalischer Begleitung des Günther-Schürmann Duos im Rahmen der TheoSounds in der Theodorskirche
      </div>
      <div>
        <a href={FlyerURL}>Flyer</a>
      </div>
    </div>
  </li>
  <li class="card">
    <div class="card-header"><span>Mittwoch, 19. November 2025</span><span>19.00 Uhr</span></div>
    <div class="card-body">
      im Karthäusersaal des Waisenhauses
    </div>
  </li>
</ul>

<style>
    .card {
        padding: 0;
        box-shadow: 6px 3px 12px var(--teal);
        transition: box-shadow 400ms ease;
    }

    .card:hover {
        box-shadow: 6px 3px 18px var(--teal);
    }

    .card-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: var(--yellow);
        margin: 0;
        background-color: hsl(from var(--teal) h s l / 0.2);
        padding: 0.25em 1em;
    }

    .card-body {
        padding: 1em;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    li::before {
        content: "";
        display: none;
    }
</style>
