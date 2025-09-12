<script>
  import imgUrl from "@img/cover.png?url"
  import TwoCols from "@components/TwoCols.svelte"
</script>

<TwoCols>
    <div slot="first">
        <img src={imgUrl} alt="Buch Cover"/>
        <p class="fs-14 text-center text-yellow text-mono">
        ISBN 978-3-906199-33-7
        </p>
    </div>
    <section slot="second">
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
</TwoCols>

<style>
.fs-14 {
  font-size: 14pt;
}
</style>
