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
	'ground': '',
	'fairy': '',
	'fighting': '',
	'psychic': 'background: linear-gradient(45deg, #533799 0%, #A573C6 100%);',
	'rock': '',
	'steel': 'background: linear-gradient(45deg, #5B7490 0%, #BACFF0 100%);',
	'ice': 'background: linear-gradient(45deg, #0CA5DF 0%, #A4DBF7 100%);',
	'ghost': '',
	'dragon': ''
};
