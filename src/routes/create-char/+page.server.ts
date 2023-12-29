import type { Actions } from '@sveltejs/kit';
import type { Warrior } from '$lib/types';
import { createWarrior } from '$lib/server';
import { randomUUID } from "crypto";
import { getRandomNumber } from '$lib/helper';

export const actions: Actions = {
	default: async (event) => {
		const data = await event.request.formData();
		const warrior: Warrior = {
			uuid: randomUUID(),
			id: Number(data.get('pokeID')),
			name: String(data.get('pokeName')),
			// todo les points ils viennent d'ou ?
			points: 0,
			pv: getRandomNumber(200, 50),
			force: getRandomNumber(50, 20)
		};

		createWarrior(warrior);
	}
};
