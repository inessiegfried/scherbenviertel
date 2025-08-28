<script>
  import imgUrl from "@img/ines3.jpg?url"
  import TwoCols from "@components/TwoCols.svelte"
</script>

<TwoCols id="grid">
  <div slot="first">
    <h2 class="hide-sm">Ines Siegfried</h2>
    <img src={imgUrl} alt="Bild der Authorin"/>
  </div>
  <section slot="second">
    <ul>
      <li>
        <a href="mailto:ines.siegfried@bluewin.ch">
          ines.siegfried@bluewin.ch
        </a>
      </li>
      <li>
        <a href="https://www.efefverlag.ch/">
          efefverlag.ch
        </a>
      </li>
      <li>
        <a href="mailto:info@efefvarlag.ch">
          info@efefverlag.ch
        </a>
      </li>
    </ul>
  </section>
</TwoCols>
