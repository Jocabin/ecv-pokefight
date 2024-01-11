<script lang="ts">
	import type { Warrior } from '$lib/types';

	export let fighter: Warrior;
	export let baseLife: number;
</script>

<span>{fighter.name}</span>

<div class="progressbar" style="--width: {(fighter.pv / baseLife) * 100}%;">
	<span class="healthCounter">{fighter.pv}/{baseLife} PV</span>
</div>

<style>
    .progressbar {
        border: solid 4px black;
        padding: 4px 8px;
        text-align: center;
        font-weight: bold;
        position: relative;
        isolation: isolate;
    }

    .progressbar::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        background: red;
        width: var(--width);
        z-index: -1;
    }

    .healthCounter {
        background-color: white;
        padding: 1px 4px;
    }
</style>
