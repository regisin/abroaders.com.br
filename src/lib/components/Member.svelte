<script>
    export let name;
	export let picture;
    export let url;
    export let bio;
    export let affiliation;
</script>


<div id="card">
    <center>
        <img src="{picture}" alt="{name}">
        <div id="info">
            <div>
                {#if url}
                <a href="{url}">{name}</a>
                {:else}
                {name}
                {/if}
                <p>{affiliation}</p>
            </div>
            <p id="bio">{bio}</p>
        </div>
    </center>
</div>

<style lang="postcss" global>
    :local(#card) {
        @apply w-72;
    }
    :local(img) {
        @apply rounded-full m-0 p-0;
    }
    :local(#info) {
        @apply bg-white p-0 m-0;
    }
    :local(#info) :local(div) {
        @apply p-0 m-0;
    }
    :local(#info) :local(p) {
        @apply text-gray-500 text-center m-0;
    }
    :local(#bio) {
        @apply font-thin;
    }
</style>