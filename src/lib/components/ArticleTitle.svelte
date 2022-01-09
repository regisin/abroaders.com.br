<script>
	export let slug = '';
	export let title;
	const id = title
		.toLowerCase()
		.replace(/[^a-zA-Z ]/g, '')
		.replace(/\s/g, '-');
	const href = slug ? `/posts/${slug}` : slug;
</script>

{#if slug}
	<h3>
		<a {href}>
			{title}
		</a>
	</h3>
{:else}
	<h2>
		<a {href}>
			{title}
		</a>
	</h2>
{/if}

<style lang="postcss" global>
	:local(h2) {
		@apply text-4xl font-light pt-7;
	}
	:local(h3) {
		@apply text-3xl font-light pt-7;
	}
</style>