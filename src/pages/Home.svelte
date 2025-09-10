<script>
  import imgUrl from "@img/ines-gross.jpg?url"
  import TwoCols from "@components/TwoCols.svelte"
</script>

<div class="img-wrapper">
    <h2 class="hide-sm">Ines Siegfried</h2>
    <img src={imgUrl} alt="Bild der Authorin"/>
</div>

<style>
.img-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-wrapper > img {
  width: 80%;
}

</style>
