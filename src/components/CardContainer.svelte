<script>
  let { 
    gap = 'lg',           // sm, md, lg, xl, 2xl
    marginBlock = '2xl'   // sm, md, lg, xl, 2xl
  } = $props();
</script>

<div 
  class="card-container" 
  class:gap-sm={gap === 'sm'}
  class:gap-md={gap === 'md'}
  class:gap-lg={gap === 'lg'}
  class:gap-xl={gap === 'xl'}
  class:gap-2xl={gap === '2xl'}
  class:margin-sm={marginBlock === 'sm'}
  class:margin-md={marginBlock === 'md'}
  class:margin-lg={marginBlock === 'lg'}
  class:margin-xl={marginBlock === 'xl'}
  class:margin-2xl={marginBlock === '2xl'}
>
  <slot />
</div>

<style>
  .card-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  /* Gap variants */
  .gap-sm { gap: var(--space-sm); }
  .gap-md { gap: var(--space-md); }
  .gap-lg { gap: var(--space-lg); }
  .gap-xl { gap: var(--space-xl); }
  .gap-2xl { gap: var(--space-2xl); }
  
  /* Margin variants */
  .margin-sm { margin-block: var(--space-sm); }
  .margin-md { margin-block: var(--space-md); }
  .margin-lg { margin-block: var(--space-lg); }
  .margin-xl { margin-block: var(--space-xl); }
  .margin-2xl { margin-block: var(--space-2xl); }
</style>
