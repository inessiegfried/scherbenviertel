<script>
  import imgUrl from "@img/ines3.jpg?url"
</script>

<div id="grid">
    <div class="img-with-header">
        <h2>Ines Siegfried</h2>
        <img src={imgUrl} alt="Bild der Authorin"/>
    </div>
<section>
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
</div>

<style>
#grid {
    justify-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10%;
    max-width: calc(800px + 240px);
}

.img-with-header {
    max-width: 400px;
    min-width: 200px;
    text-align: center;
    
    > img {
        width: 100%;
    }

    > h2 {
        padding: 0;
        margin: 0;
    }
}

@media (max-width: 600px) {
    #grid {
        flex-direction: column-reverse;
        margin-top: 30px;
    }

    .img-with-header {
        text-align: center;

        > img {
            width: 80%;
        }
    }

}
</style>
