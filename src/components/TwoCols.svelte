<div class="two-cols">
  <div class="first-col"><slot name="first" /></div>
  <div class="second-col"><slot name="second" /></div>
</div>

<style>
.two-cols {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 10%;
    width: 100%;
    max-width: calc(800px + 240px);
    margin-block: auto;
}

.first-col {
  width: min(300px, 100%);
  text-align: center;
  flex-shrink: 0;

  position: sticky;
  top: 0;
    
    > h2 {
        padding: 0;
        margin: 0;
    }
}

.second-col {
  flex-grow: 1;
  margin-block: auto;
}

:global([slot="first"] img) {
  width: 100%;
}

@media (max-width: 600px) {

  .first-col {
    position: relative;
    width: 100%;
  }

  .second-col {
    width: 100%;
  }

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
