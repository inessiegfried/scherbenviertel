<script>
    import Card from "@components/Card.svelte";
    import CardContainer from "@components/CardContainer.svelte";
    import TwoCols from "@components/TwoCols.svelte";
    import data from "/public/data/stimmen.json";

    import imgUrl from "@img/Rezension-Linsmayer.jpg?url";
</script>

<TwoCols 
    id="stimmen" 
    title={'Stimmen zum Buch „Scherbenviertel"'} 
    titleMain="Stimmen"
    titleSub={'zum Buch „Scherbenviertel"'}
    breakout={true}
>
    {#snippet first()}
      <a target="_blank" href={imgUrl}>
            <img src={imgUrl} alt="Bild einer Rezension" />
      </a>
    {/snippet}
    {#snippet second()}
        <CardContainer gap="lg" marginBlock="2xl">
            {#each data as entry}
                <Card>
                    <div slot="header">
                        {entry.author}
                    </div>
                    <div slot="body">
                      <section  class="msg-body">
                        {#each entry.msg as line}
                            <p>
                                {line}
                            </p>
                        {/each}
                      </section>
                      <p>{entry.greetings}</p>
                    </div>
                </Card>
            {/each}
      <Card>
        <div slot="header">
          Beitrag im Regionaljournal
        </div>
        <div slot="body">
          <section  class="msg-body">
            Wo Basel einst ein Scherbenviertel war. Autorin Ines Siegfried erzählt eine Familiengeschichte aus dem Kleinbasel. Ein 
            <a href="https://nanoo.tv/link/v/RLwNtkdu"
              target="_blank">
              Beitrag von Patrick Künzle
            </a>
            im Regionaljournal Basel Baselland vom 19.1.26.
          </section>
        </div>

      </Card>
        </CardContainer>
    {/snippet}
</TwoCols>

<style>
    .msg-body > p {
      margin-block: 0;
    }
</style>
