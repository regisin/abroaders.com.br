<script>
	export let description;
	export let slug = '';
	const href = slug && `/posts/${slug}`;
</script>

<p>
	{description}

	{#if slug}
		<a {href}>Leia mais &rarr;</a>
	{/if}
</p>