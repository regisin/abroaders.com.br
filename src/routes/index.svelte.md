<script context="module">
	export async function load({ fetch }) {
		const posts = await fetch('/posts.json').then((res) => res.json());
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	import Head from '$lib/components/Head.svelte';
	import Article from '$lib/components/Article.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	import ArticleDescription from '$lib/components/ArticleDescription.svelte';
	export let posts;
</script>

<Head title="Home" description="Mentes inquietas compartilhando experiências para ajudar você que deseja estudar no exterior" />

# Posts


{#each posts as { slug, title, author, description, date, data }}
		<ArticleTitle {slug} {title} />
		<ArticleMeta {author} {date} />
		<ArticleDescription {description} {slug} />
{/each}