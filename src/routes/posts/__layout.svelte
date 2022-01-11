<script context="module">
	export async function load({ url, fetch }) {
		const post = await fetch(`${url.pathname}.json`).then(res => res.json());
		if (!post || !post.published) {
			return {
				status: 404,
				error: new Error('Post could not be found')
			};
		}
		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	import Head from '$lib/components/Head.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';
	export let post;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css">
</svelte:head>

<Head title={post.title} description={post.description} />

<ArticleTitle title={post.title} />
<ArticleMeta author={post.author} date={post.date} />

<slot />