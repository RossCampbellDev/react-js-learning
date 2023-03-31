import { useReducer } from "react";

interface Props {
	onAddName: (name: string) => void;
}

const UserForm = ({onAddName}: Props) => {
	const [state, dispatch] = useReducer(
		(state, action) => ({
			...state,
			...action,
		}),
		{
			first: "",
			last: "",
		}
	);
	
	return (
		<div>
			<input 
				type="text"
				value={state.first}
				onChange={(e) => dispatch({ first: e.target.value })}
			/>
			<input 
				type="text"
				value={state.last}
				onChange={(e) => dispatch({ last: e.target.value })}
			/>
			<div>
				First: {state.first} <br/>
				Last: {state.last}
			</div>

			<button
				type="button" 
				className={`btn btn-success`}
				onClick={ () => onAddName(state.first + " " + state.last)}
			>Add</button>
		</div>
	);
}

export default UserForm;