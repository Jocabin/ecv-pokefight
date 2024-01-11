import { redirect } from '@sveltejs/kit';

export async function load({ url: { searchParams }, parent }) {
	const uuid1 = searchParams.get('uuid1');
	const uuid2 = searchParams.get('uuid2');

	if (!uuid1 || !uuid2) {
		return redirect(301, '/');
	}

	const layoutData = await parent();
	const fighter1 = layoutData.warriors.find(warrior => warrior.uuid === uuid1);
	const fighter2 = layoutData.warriors.find(warrior => warrior.uuid === uuid2);

	return { fighter1, fighter2 };
}
