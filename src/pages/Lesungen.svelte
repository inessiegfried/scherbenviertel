<script>
  import FlyerURL from "@pdfs/Flyer-TheoSounds.pdf?url"
  import Card from "@components/Card.svelte"
</script>


<div class="card-container">
  <Card>
    <div slot="header"><span>Sonntag, 26. Oktober</span><span>17.00 Uhr</span></div>
    <div slot="body">
      <div>Herbst-Neuerscheinungen</div>
      <div>organisiert von lokal lesen in der Allgemeinen
        Lesegesellschaft Basel</div>
    </div>
  </Card>
  <Card>
    <div slot="header">
      <span>Mittwoch, 29. Oktober 2025</span><span>19.30 Uhr</span>
    </div>
    <div slot="body">
      <div>
     mit musikalischer Begleitung des Günther-Schürmann Duos im Rahmen der TheoSounds in der Theodorskirche
      </div>
      <div>
        <a href={FlyerURL}>Flyer</a>
      </div>
    </div>
  </Card>
  <Card>
    <div slot="header"><span>Mittwoch, 19. November 2025</span><span>19.00 Uhr</span></div>
    <div slot="body">
      im Karthäusersaal des Waisenhauses
    </div>
  </Card>
</div>

<style>
.card-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
