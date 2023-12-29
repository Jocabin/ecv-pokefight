<script>
	import PokemonCard from '$lib/components/PokemonCard.svelte';

	export let data;
	const allPokemons = data.allPokemons;

	$: warriors = data.warriors;
	$: champion = data.warriors[0]
</script>

<h1>Classement des combatants</h1>

<ul class="flex flex-wrap justify-start items-start gap-8 p-4 mt-8">
	{#each warriors as warrior (warrior.uuid)}
		{@const src = allPokemons[warrior.id - 1].sprites.front_default}
		{@const type = allPokemons[warrior.id - 1].types[0].type.name}

		<li class="w-fit">
			<PokemonCard pokemon={warrior} {src} {type} isChampion={warrior.uuid === champion.uuid} />
		</li>
	{/each}
</ul>
