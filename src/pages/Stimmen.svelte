<script>
    import Card from "@components/Card.svelte";
    import TwoCols from "@components/TwoCols.svelte";
    import data from "/public/data/stimmen.json";

    import imgUrl from "@img/Rezension.jpg?url";
</script>

<TwoCols id="stimmen" title="Stimmen zum Scherbenviertel" breakout={true}>
    {#snippet first()}
            <img src={imgUrl} alt="Bild einer Rezension" />
    {/snippet}
    {#snippet second()}
        <div class="card-container">
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
                        Beitrag aus dem Regionaljournal
                    </div>
                    <div slot="body">
                      <section  class="msg-body">
                        <a href="https://nanoo.tv/link/v/RLwNtkdu"
              target="_blank">Beitrag auf Nanoo.tv</a>
                      </section>
                    </div>

            </Card>
        </div>
    {/snippet}
</TwoCols>

<style>
    .card-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-block: 3em;
    }

    .msg-body > p {
      margin-block: 0;
    }
</style>
