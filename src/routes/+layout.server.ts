import { getAllWarriors } from '$lib/server';
import allPokemons from '$lib/pokemons.json'

export async function load() {
	return {
		warriors: getAllWarriors(),
		allPokemons
	}
}
