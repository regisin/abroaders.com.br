<script>
    export let hero;
  </script>
  
  <div id="hero">
    <div>
    {#if hero.url}
    <a href="/"><img src="{hero.url}" alt="{hero.title}"></a>
    {:else}
        <h1>
            <a href="/">{hero.title}</a>
        </h1>
    {/if}
    </div>
  </div>
  
  <style lang="postcss" global>
    :local(#hero) {
      @apply flex flex-wrap h-48 text-black font-bold text-6xl content-center;
    }
    :local(#hero) div {
      @apply container mx-auto md:max-w-3xl;
    }
    :local(#hero) div a {
      @apply hover:opacity-70;
    }
    :local(#hero) div img {
      @apply h-20;
    }
  </style>