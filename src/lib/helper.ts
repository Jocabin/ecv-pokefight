export function getRandomNumber(max: number, min = 0) {
	return Math.floor(Math.random() * (max - min)) + min;
}

export const pokeGradients = {
	'grass': 'background: linear-gradient(45deg, #2C8637 0%, #84C81F 100%);',
	'poison': 'background: linear-gradient(45deg, #533799 0%, #A573C6 100%);',
	'fire': 'background: linear-gradient(45deg, #F13A1C 0%, #F8AE9E 100%);',
	'flying': 'background: linear-gradient(45deg, #5B7490 0%, #BACFF0 100%);',
	'water': 'background: linear-gradient(45deg, #0CA5DF 0%, #A4DBF7 100%);',
	'bug': 'background: linear-gradient(45deg, #2C8637 0%, #84C81F 100%);',
	'normal': 'background: linear-gradient(45deg, #5B7490 0%, #BACFF0 100%);',
	'electric': 'background: linear-gradient(45deg, #D0B14E 0%, #CDBC36 100%);',
	'ground': 'background: linear-gradient(45deg, #884E3A 0%, #EAB15D 100%);',
	'fairy': 'background: linear-gradient(45deg, #F0166D 0%, #F09CB3 100%);',
	'fighting': 'background: linear-gradient(45deg, #884E3A 0%, #EAB15D 100%);',
	'psychic': 'background: linear-gradient(45deg, #533799 0%, #A573C6 100%);',
	'rock': 'background: linear-gradient(45deg, #884E3A 0%, #EAB15D 100%);',
	'steel': 'background: linear-gradient(45deg, #5B7490 0%, #BACFF0 100%);',
	'ice': 'background: linear-gradient(45deg, #0CA5DF 0%, #A4DBF7 100%);',
	'ghost': 'background: linear-gradient(45deg, #202928 0%, #3C7B7C 100%);',
	'dragon': 'background: linear-gradient(45deg, #202928 0%, #3C7B7C 100%);'
};
