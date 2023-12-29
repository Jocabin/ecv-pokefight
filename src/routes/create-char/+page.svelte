<script lang="ts">
	import PokemonToChoose from '$lib/components/PokemonToChoose.svelte';

	export let data;
	$: pokemons = data.allPokemons;
	$: choosenPokemon = {
		id: -1,
		name: '',
		sprites: {
			front_default: ''
		}
	};
	$: isPokemonValid = (choosenPokemon.id !== -1) && (choosenPokemon.name !== "")
</script>

<div class="flex flex-col justify-center items-center gap-4">
	<h1>Choisissez votre pokemon</h1>
	<a href="/" class="border border-black rounded px-4 py-2 hover:bg-amber-100">Retour à l'accueil</a>
</div>
<form method="post" class="p-4 mt-4">
	<div class="mb-20 pokemonsGrid">
		{#each pokemons as pokemon (pokemon.id)}
			<PokemonToChoose on:selected={(e) => {choosenPokemon = e.detail}} {pokemon} />
		{/each}
	</div>

	<input type="hidden" name="pokeID" value="{choosenPokemon.id}">

	<div class="fixed left-0 bottom-0 w-full bg-white p-4 border-t flex items-stretch justify-between gap-4">
		<input type="text" name="pokeName" bind:value="{choosenPokemon.name}" class="border-black border rounded text-2xl p-2 flex-1">
		<button disabled={!isPokemonValid} type="submit" class="bg-accent text-white font-bold uppercase text-3xl p-4 rounded disabled:opacity-20">Créer un combatant</button>
	</div>
</form>

<style>
	.pokemonsGrid {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
			gap: 2rem;
	}


</style>
