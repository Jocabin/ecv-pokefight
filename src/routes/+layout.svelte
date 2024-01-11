<script>
	import '../app.css';
	import Trophee from '$lib/assets/trophee.png'

	export let data;
	const allPokemons = data.allPokemons
	$: champion = data.warriors[0];
</script>

<nav class="flex justify-between items-center bg-green-950 text-white p-4">
	<div class="flex justify-center items-center gap-8 font-bold text-xl">
		<a href="/">Combatre  ⚔️</a>
		<a href="/create-char">Créer un combatant 🥊</a>
		<a href="/warriors">Classement 🏅</a>
	</div>

	{#if champion}
		{@const src = allPokemons[champion.id - 1].sprites.front_default}

		<div class="bg-gray-200 text-black px-4 rounded-2xl flex flex-col items-center justify-center">
			<div class="flex justify-start items-center gap-4">
				<img {src} alt="">

				<span class="text-center">
					Champion actuel
					<br>
					<span class="font-bold">{champion.name} - {champion.points} Pts</span>
				</span>

				<img width="40" src={Trophee} alt="">
			</div>
		</div>
	{/if}
</nav>

<main class="p-4">
	<slot></slot>
</main>

<style>
    a:hover {
        background: indianred;
    }

		a {
				background: white;
				color: black;
				padding: 8px;
				border-radius: 4px;
		}
</style>
