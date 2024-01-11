import { updateWarriorScore } from '$lib/server';

export async function POST({request}) {
	const data = await request.json()
	updateWarriorScore(data)
	return new Response()
}
