<script lang="ts">
	import FighterSide from '$lib/components/FighterSide.svelte';
	import { onMount } from 'svelte';
	import { getRandomNumber } from '$lib/helper';
	import type { MatchResults } from '$lib/types';
	import { invalidate } from '$app/navigation';

	export let data;

	$: fighter1 = data.fighter1;
	$: fighter2 = data.fighter2;

	let baseFighter1Life: number;
	let baseFighter2Life: number;

	let round = 0;
	let matchResult: MatchResults | null;

	function startRound(interval: ReturnType<typeof setInterval>) {
		if (fighter1 && fighter2) {
			const fighter1AtkPower = getRandomNumber(fighter1.force, 0);
			const fighter2AtkPower = getRandomNumber(fighter2.force, 0);

			fighter2.pv -= fighter1AtkPower;
			fighter1.pv -= fighter2AtkPower;
			round += 1;

			if (fighter1.pv <= 0 || fighter2.pv <= 0) {
				matchResult = getFightResult();
				fetch('/fight/saveFightResult', {
					method: 'POST',
					body: JSON.stringify(matchResult)
				}).then(() => {
					invalidate('p:all');
				});
				clearInterval(interval);
			}
		}
	}

	function getFightResult() {
		if (fighter1 && fighter2) {
			let result: MatchResults = {
				winner: undefined,
				looser: undefined,
				draw: false
			};

			if (fighter1.pv <= 0 && fighter2.pv > 0) {
				fighter1.pv = 0;
				result.looser = fighter1;
				result.winner = fighter2;
			} else if (fighter2.pv <= 0 && fighter1.pv > 0) {
				fighter2.pv = 0;
				result.looser = fighter2;
				result.winner = fighter1;
			} else {
				fighter1.pv = 0;
				fighter2.pv = 0;

				result.looser = fighter1;
				result.winner = fighter2;
				result.draw = true;
			}
			return result;
		}
		return null;
	}

	onMount(() => {
		if (fighter1 && fighter2) {
			baseFighter1Life = fighter1.pv;
			baseFighter2Life = fighter2.pv;

			const interval = setInterval(() => {
				startRound(interval);
			}, 20);

			return () => {
				clearInterval(interval);
			};
		}
	});
</script>

<svelte:head>
	<title>Combat !</title>
</svelte:head>

<h1>Combatez !</h1>

<p>Rounds: {round}</p>

{#if matchResult}
	{#if matchResult.draw}
		<p>match nul</p>
	{:else}
		<p>le gagneur c'est {matchResult.winner?.name}</p>
	{/if}

	<a href="/">Refaire un combat</a>
{:else}
	{#if fighter1 && fighter2}
		<div>
			<FighterSide fighter={fighter1} baseLife={baseFighter1Life} />
			<FighterSide fighter={fighter2} baseLife={baseFighter2Life} />
		</div>
	{/if}
{/if}
