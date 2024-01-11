<script lang="ts">
	import { Tilt } from 'svelte-ux';
	import type { Warrior } from '$lib/types';
	import { pokeGradients } from '$lib/helper';
	import Trophee from '$lib/assets/trophee.png';

	export let pokemon: Warrior;
	export let src: string;
	export let type: string;
	export let isChampion = false;

	$:({ name: pokeName, points, force, pv } = pokemon);
</script>

<Tilt>
	<div class="topLevel border-8 border-gray-300 rounded-xl" style="{pokeGradients[type]}">
		<div class="flex justify-between items-center p-2">
			<span class="font-bold capitalize flex justify-start items-center gap-2">
				{#if isChampion}
							<img width="25" class="ml-auto" src={Trophee} alt="">
				{/if}
				<span>{pokeName}</span>
			</span>

			<span class="font-bold"><span class="text-[10px] ">PV</span>{pv}</span>
		</div>

		<img width="250" {src} alt="">

		<div class="bg-gray-200 px-1 text-xs rounded mx-2 flex flex-col justify-start items-start gap-1 mb-4">
			<span>Pts: {points}</span>
			<span>Atk: {force}</span>
		</div>
	</div>
</Tilt>

<style>
    .topLevel {
        user-select: none;
        pointer-events: none;
    }
</style>
