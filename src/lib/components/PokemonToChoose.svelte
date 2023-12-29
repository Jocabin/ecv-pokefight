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

<input type="radio" name="pokeid" id="pokemon-{pokemon.id}" value="{pokemon.id}" class="hidden">

<button type="button" on:click={selectPokemon} class="cursor-pointer">
	<label for="pokemon-{pokemon.id}"
				 class="flex flex-col items-center justify-start gap-2 cursor-pointer border rounded overflow-hidden hover:bg-gray-200">
		<img src="{pokemon.sprites.front_default}" alt="{pokemon.name}">
		<span class="font-bold capitalize">{pokemon.name}</span>
		<span class="labelBtn w-full uppercase font-bold p-2 bg-accent text-white">
			<span>Choisir ce pokemon</span>
			<span class="hidden bg-red-700">Pokémon choisi</span>
		</span>
	</label>
</button>

<style>
    input[type=radio]:checked + button > label {
        background-color: var(--accent);
        color: white;
    }

    input[type=radio]:checked + button > label .labelBtn > span:last-of-type {
        display: block;
    }

    input[type=radio]:checked + button > label .labelBtn > span:first-of-type {
        display: none;
    }

    input[type=radio] + button > label .labelBtn > span:last-of-type {
        display: none;
    }
</style>
