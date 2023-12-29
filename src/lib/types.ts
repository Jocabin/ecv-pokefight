export type Warrior = {
	uuid: string;
	name: string;
	id: number;
	points: number;
	pv: number;
	force: number;
}

export type BasePokemon = {
	id: number;
	name: string;
	sprites: {
		front_default: string;
	};
}
