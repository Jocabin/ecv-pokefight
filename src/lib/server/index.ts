import type { Warrior } from "$lib/types";
import { readFileSync, writeFileSync } from "fs";

const bagFilePath = "generated/warriors.json";
let warriors: Warrior[] = getAllWarriors();

export function createWarrior(warrior: Warrior) {
	warriors = [...warriors, warrior];
	saveBDD();
}

export function deleteWarrior(uuid: string) {
	warriors = warriors.filter((warrior) => warrior.uuid !== uuid);
	saveBDD();
}

export function getAllWarriors(): Warrior[] {
	try {
		const str = readFileSync(bagFilePath, "utf-8");
		return JSON.parse(str);
	} catch (error) {
		return [];
	}
}

export function saveBDD() {
	writeFileSync(bagFilePath, JSON.stringify(warriors));
}
