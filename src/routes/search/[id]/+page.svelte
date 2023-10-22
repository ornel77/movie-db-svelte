<script>
	import MovieCard from "../../../components/MovieCard.svelte";

	export let data;
    const {searchedMovie} = data
</script>

<div class="searched-movies">
    {#each searchedMovie as movie}
        <MovieCard {movie}/>
    {/each}
</div>

<style>
    .searched-movies {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        row-gap: 2rem;
        column-gap: 1rem;
    }
</style>
