import type { MatchResults, Warrior } from '$lib/types';
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

export function updateWarriorScore(results: MatchResults) {
	const winnerScore = 3
	const looserScore = 0
	const drawScore = 1

	const winner = warriors.find(warrior => warrior.uuid === results.winner.uuid)
	const looser = warriors.find(warrior => warrior.uuid === results.looser.uuid)

	if (!results.draw) {
		winner.points += winnerScore
		looser.points += looserScore
	} else {
		winner.points = drawScore
		looser.points = drawScore
	}

	saveBDD()
}

export function saveBDD() {
	writeFileSync(bagFilePath, JSON.stringify(warriors));
}
