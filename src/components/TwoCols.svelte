<div class="two-cols">
  <div class="first-col"><slot name="first" /></div>
  <div class="second-col"><slot name="second" /></div>
</div>

<style>
.two-cols {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10%;
    max-width: calc(800px + 240px);
}

.first-col {
    max-width: 400px;
    min-width: 200px;
    text-align: center;
    
    > h2 {
        padding: 0;
        margin: 0;
    }
}

:global([slot="first"] > img) {
  width: 100%;
}

@media (max-width: 600px) {

  .hide-sm {
    display: none;
  }

    .two-cols {
        flex-direction: column;
        margin-top: 30px;
    }

    :global([slot="first"]) {
        text-align: center;

        > img {
            width: 80%;
        }
    }

}
</style>
