<script>
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	let inputValue = '';
	let active = false;

	const cancelInactive = () => {
		inputValue ? (active = true) : (active = false);
	};

	const submitSearch = () => {
		goto('search/' + inputValue);
	};
</script>

<form on:submit|preventDefault={submitSearch} class="search">
	{#if !active}
		<label in:fly={{ y: -10, duration: 500 }} out:fly={{ y: -10, duration: 500 }} for="search_movie"
			>Search Movie</label
		>
	{/if}
	<input
		on:focus={() => (active = true)}
		on:blur={cancelInactive}
		type="text"
		id="search_movie"
		name="search_movie"
		bind:value={inputValue}
		class={active ? 'selected' : ''}
	/>
	{#if inputValue}
		<button  in:fly={{ x: 20, duration: 500 }} out:fly={{ x: 0, duration: 500 }} >Search</button>
	{/if}
</form>

<style>
	.search {
		position: relative;
		width: 30%;
		margin: 1rem;
	}
	button {
		all: unset;
		font-size: 0.7rem;
		padding: 0 1rem;
		background: rgb(96, 110, 201);
		color: white;
		font-weight: bold;
		position: absolute;
		bottom: 50%;
		right: 0;
		transform: translate(0, 50%);
		height: 100%;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		cursor: pointer;
	}
	input {
		width: 100%;
		border: none;
		font-size: 1rem;
		font-family: Arial, Helvetica, sans-serif;
		outline: none;
		color: rgb(255, 255, 255);
		transition: background 0.75s ease-out;
		padding: 0.5rem 0.1rem;
		font-weight: bold;
		background: rgb(63, 63, 63);
		padding: 1rem;
		border-radius: 10px;
	}

	input.selected {
		background: rgb(30, 36, 47);
	}

	label {
		position: absolute;
		font-size: 0.8rem;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		pointer-events: none;
		color: white;
		padding: 0 1rem;
	}
</style>
