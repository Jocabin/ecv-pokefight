<script lang="ts">
	export let data;

	const allPokemons = data.allPokemons;

	$: selectedWarriors = [];
	$: warriors = data.warriors;
	$: fightUrl = selectedWarriors.length === 2 ? `/fight?uuid1=${selectedWarriors[0]}&uuid2=${selectedWarriors[1]}` : '/fight';

	function selectWarrior(uuid: string) {
		if (selectedWarriors.includes(uuid)) {
			selectedWarriors = selectedWarriors.filter(selectedUUID => selectedUUID !== uuid);
			return;
		}

		if (selectedWarriors.length === 2) {
			return;
		}

		selectedWarriors = [...selectedWarriors, uuid];
	}
</script>

<h1>Choisissez vos combatants</h1>

<div class="flex flex-col items-stretch gap-8 justify-start mt-8">
	<div class="h-[500px] border border-black p-4 rounded overflow-hidden">
		<p class="italic font-bold mb-4">Max 2 combatants !</p>

		<ul class="flex flex-col gap-6 justify-start items-stretch h-full overflow-auto pb-10">
			{#each warriors as warrior (warrior.uuid)}
				{@const src = allPokemons[warrior.id - 1].sprites.front_default}

				<li>
					<button on:click={() => {selectWarrior(warrior.uuid)}}
									class:selectedWarrior={selectedWarriors.includes(warrior.uuid)}
									class="bg-gray-200 w-full rounded flex justify-start items-center p-2">
						<img {src} alt="">
						<span class="flex flex-col justify-start items-start">
						<span class="uppercase font-bold">{warrior.name}</span>
						<span>Pts: {warrior.points}</span>
						<span>PV: {warrior.pv}</span>
						<span>Atk: {warrior.force}</span>
					</span>
					</button>
				</li>
			{/each}
		</ul>
	</div>

	<a href="{fightUrl}"
		 class:matchCantStart={selectedWarriors.length !== 2}
		 class="bg-accent text-white font-bold text-5xl px-12 py-6 text-center">
		Match up
	</a>
</div>

<style>
    .matchCantStart {
        pointer-events: none;
        opacity: 20%;
        user-select: none;
    }

    .selectedWarrior {
        background-color: darkred;
				color: white;
    }
</style>
