<script>
    export let name;
	export let picture;
    export let url;
    export let bio;
    export let affiliation;
</script>

<img src="{picture}" alt="{name}" />
{#if url}
    <h2><a href="{url}">{name}</a></h2>
{:else}
    <h2>{name}</h2>
{/if}
<h3>{affiliation}</h3>
<p>{bio}</p>