<script>
	import PopularMovies from '../components/PopularMovies.svelte';
	export let data;
	const { popular } = data;
</script>

<section>
	<PopularMovies {popular} />
</section>
