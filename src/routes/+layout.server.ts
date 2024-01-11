import { getAllWarriors } from '$lib/server';
import allPokemons from '$lib/pokemons.json';

export async function load({ depends }) {
	depends('p:all');

	const sortedWarriors = getAllWarriors().sort((a, b) => {
		return b.points - a.points;
	});

	return {
		warriors: sortedWarriors,
		allPokemons
	};
}
