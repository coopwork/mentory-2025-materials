
type StateType = {
	name: string | undefined
	likes: number
	dislikes: number
}

type ActionType = {
	type: 'add_like' | 'delete_like' | 'add_dislike' | 'delete_dislike' | 'update_name'
	name?: string | undefined
}

export function likesDislikesReducer(state:StateType, action:ActionType) {
	switch (action.type) {
		case 'add_like': return {
			...state,
			likes: state.likes + 1
		};
		case "delete_like": return {
			...state,
			likes: state.likes - 1
		};
		case "add_dislike": return {
			...state,
			dislikes: state.dislikes + 1
		};
		case "delete_dislike": return {
			...state,
			dislikes: state.dislikes - 1
		};
		case 'update_name': return {
			...state,
			name: action.name
		};
		default: {
			throw Error('Unknown action.');
		}
	}
}