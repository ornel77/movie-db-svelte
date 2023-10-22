export async function load({ fetch, params }) {
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=bd67c47d943425bc2dec1c2282552ba7&query=${params.id}&include_adult=false&language=en-US&page=1`
    );
    const data = await res.json();
    if (res.ok) {
        return {
            searchedMovie: data.results
        }
    }
}