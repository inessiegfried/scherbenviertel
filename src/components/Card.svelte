<div class="card">
  <slot class="card-header" name="header"></slot>
  <slot class="card-body" name="body"></slot>
</div>

<style>
    .card {
        padding: 0;
        box-shadow: 6px 3px 12px var(--teal);
        transition: box-shadow 400ms ease;
    }

    .card:hover {
        box-shadow: 6px 3px 18px var(--teal);
    }

    :global([slot="header"]) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: var(--yellow);
        margin: 0;
        background-color: hsl(from var(--teal) h s l / 0.2);
        padding: 0.25em 1em;
    }

    :global([slot="body"]) {
        padding: 1em;
    }
</style>
