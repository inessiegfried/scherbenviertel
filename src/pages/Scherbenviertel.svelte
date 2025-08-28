<script>
  import imgUrl from "@img/cover.png?url"
</script>

<div id="grid">
    <div class="img-with-header">
        <img src={imgUrl} alt="Buch Cover"/>
        <p class="text-center">
        ISBN 978-3-906199-33-7
        </p>
    </div>
    <section>
        <p>
            Erzählt wird die Geschichte einer Unterschichtsfamilie aus dem 19.
            Jahrhundert. Der Bäcker, Samuel Schwarz, ein jähzorniger
            Alkoholiker und weinerlicher Jammerlappen, ist Opfer und Täter
            zugleich. Seine Frau Rosina, deren Selbstbewusstsein auf ihrer
            Schönheit gründet, gerät in ihrem Streben nach Unabhängigkeit in
            neue Abhängigkeit. Deren Tochter Elisabeth, die aufgrund der
            Scheidung ihrer Eltern im Waisenhaus aufwächst, muss vieles über
            sich ergehen lassen, behält aber den Kopf oben. Und ihr unehelicher
            Sohn Jakob verabschiedet sich leise und zielstrebig aus der Misere
            des Scherbenviertels.
        </p>
    </section>
</div>

<style>
#grid {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 840px;
}

.img-with-header > img {
    width: 100%;
}

@media (max-width: 600px) {
  #grid {
    display: flex;
    flex-direction: column;
  }
}
</style>
