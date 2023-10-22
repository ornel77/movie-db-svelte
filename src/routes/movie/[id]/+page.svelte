<script>
	import { fly } from 'svelte/transition';

	export let data;
	const { movieDetail } = data;
</script>

<div class="movie-details container" in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
	<div class="img-container">
		<img
			src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
			alt={movieDetail.title}
		/>
	</div>
	<div class="txt-container">
		<h2>{movieDetail.title}</h2>
		<p class="overview">
			{movieDetail.overview}
		</p>
		<p>
			<span>Release date</span>
			{movieDetail.release_date} <br />
			<span>Budget:</span> ${movieDetail.budget} <br />
			<span>Rating</span>
			{movieDetail.vote_average.toFixed(2)} <br />
			{movieDetail.runtime}mins
		</p>
	</div>
</div>

<style>
	h2 {
		padding: 1rem 0 2rem;
	}
	img {
		border-radius: 1rem;
	}
	p {
		padding: 1rem 0;
		line-height: 1.3;
	}
	.movie-details {
		margin: 2rem 20%;
	}
	.img-container {
		width: 100%;
	}

	span {
		display: inline-block;
		font-weight: bold;
		margin-bottom: 5px;
	}
</style>
