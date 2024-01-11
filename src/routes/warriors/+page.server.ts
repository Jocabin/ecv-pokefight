export async function load({parent}) {
	const layoutData = await parent();

	return {
		warriors: layoutData.warriors
	}
}
