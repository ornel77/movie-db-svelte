
	//bd67c47d943425bc2dec1c2282552ba7
	// to do a ssr and use the API
	export async function load({ fetch }) {
		const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=bd67c47d943425bc2dec1c2282552ba7&language=en-US&page=1')
		const data = await res.json();
		if (res.ok) {
			return {
				 popular: data.results
			};
		}
	}
