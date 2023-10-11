export async function load({ fetch, params }) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=bd67c47d943425bc2dec1c2282552ba7&language=en-US`
    );
    const data = await res.json();
    if (res.ok) {
        return {
            movieDetail: data
        }
    }
}