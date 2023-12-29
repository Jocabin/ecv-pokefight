<script lang="ts">
	import type { BasePokemon } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

	export let pokemon: BasePokemon;
	const dispatch = createEventDispatcher();

	function selectPokemon() {
		dispatch('selected', {
			name: pokemon.name,
			id: pokemon.id,
			sprites: {
				front_default: pokemon.sprites.front_default
			}
		});
	}
</script>

<button type="button" on:click={selectPokemon} class="cursor-pointer">
	<label for="pokemon-{pokemon.id}" class="flex flex-col items-center justify-start gap-2 cursor-pointer border rounded overflow-hidden hover:bg-gray-200">
		<img src="{pokemon.sprites.front_default}" alt="{pokemon.name}">
		<span class="font-bold capitalize">{pokemon.name}</span>
		<span class="w-full uppercase font-bold p-2 bg-accent text-white">Choisir ce pokemon</span>
	</label>
</button>

<input type="radio" name="pokeid" id="pokemon-{pokemon.id}" value="{pokemon.id}" class="hidden">
