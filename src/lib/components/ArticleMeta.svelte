<script>
	export let author;
	export let date;
	const formattedDate = new Date(date).toLocaleDateString('pt-BR');
</script>

<p>
	<span class="date">{formattedDate}</span> por
	<span class="author">{author}</span>
</p>

<style lang="postcss" global>
	:local(p) {
		@apply text-slate-500 font-semibold pt-2 pb-4 text-left;
	}
</style>