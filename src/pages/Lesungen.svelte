<script>
  import FlyerURL from "@pdfs/Flyer-TheoSounds.pdf?url"
  import Card from "@components/Card.svelte"
  import TwoCols from "@components/TwoCols.svelte"

  import imgUrl from "@img/ines4.jpg?url"
</script>


<TwoCols>
  <div slot="first" class="hide-sm">
        <img src={imgUrl} alt="Bild der Authorin"/>
  </div>
<div slot="second" class="card-container">
  <Card>
    <div slot="header"><span>Sonntag, 26. Oktober</span><span>17.00 Uhr</span></div>
    <div slot="body">
      <strong>Herbst-Neuerscheinungen</strong>
      <p>
          Organisiert von lokal lesen in der Allgemeinen Lesegesellschaft
          Basel.
      </p>
    </div>
  </Card>
  <Card>
    <div slot="header">
      <span>Mittwoch, 29. Oktober 2025</span><span>19.30 Uhr</span>
    </div>
    <div slot="body">
      <p>
     Mit musikalischer Begleitung des Günther-Schürmann Duos im Rahmen der
          TheoSounds in der Theodorskirche Basel.
      </p>
      <div>
        <a href={FlyerURL}>Flyer</a>
      </div>
    </div>
  </Card>
  <Card>
    <div slot="header"><span>Mittwoch, 19. November 2025</span><span>19.00 Uhr</span></div>
    <div slot="body">
      Im Kartäusersaal des Bürgerlichen Waisenhauses Basel.
    </div>
  </Card>
</div>
</TwoCols>

<style>
.card-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
