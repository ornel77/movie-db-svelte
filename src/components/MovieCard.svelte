<script>
	export let movie;
</script>

<div class="movie-card">
	<img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} />

	<div class="description">
		<h2>{movie.title}</h2>
		<p>{movie.release_date}</p>
	</div>
</div>

<style>
	img {
		width: 100%;
        /* height: 30vh; */
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 1rem;
	}

    .description {
        height: 5vh;
    }

    h2 {
        font-size: .9rem;
    }

    p {
        font-size: .7rem;
    }

    .movie-card {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1rem;
    }
</style>
