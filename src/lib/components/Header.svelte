<script>
  export let items;
  export let path;
</script>

<header>
    <nav>
      {#each items as item}
        <a sveltekit:prefetch class:active={path === item.url} href={item.url}
          >{item.title}</a
        >
      {/each}
    </nav>
</header>

<style lang="postcss" global>
  :local(header) {
    @apply sticky top-0 bg-white border-y border-y-slate-200 py-4;
  }
  :local(header) nav {
    @apply flex justify-start mx-auto md:max-w-3xl space-x-6;
  }
  :local(header) nav a {
    @apply hover:underline font-thin;
  }
  :local(.active) {
    @apply underline;
  }
</style>
