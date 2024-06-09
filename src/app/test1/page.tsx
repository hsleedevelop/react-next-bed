"use client"
import React, { useReducer } from "react"
import { Spacer } from "@/app/components/Spacer";

interface Test1State {
	count?: number
}

const initialState: Test1State = {
	count: undefined
}

type Test1ActionType = "INIT" | "INCREASE" | "DECREASE" | "ASYNC";

interface Test1Action {
	type: Test1ActionType;
	count?: number;
}

const sleep = (ms: number) => {
	return new Promise(
		(resolve) => setTimeout(resolve, ms));
};

const add10 = async (num: number) => {
	await sleep(2000);
	return num + 10;
}

const useDispatchMiddleware = (
	dispatch: React.Dispatch<Test1Action>,
) => {

	return (action: Test1Action) => {
		switch(action.type) {
			case "ASYNC":

				break;
			default:
				dispatch(action);
				break;
		}
	};
}

const reducer = (state: Test1State, action: Test1Action) => {
	let mstate = state;
	switch (action.type) {
		case "INIT":
			mstate = { ...state, count: 0 }
			break
		case "INCREASE":
			mstate = { ...state, count: (state.count || 0) + 1 }
			break
		case "DECREASE":
			mstate = { ...state, count: (state.count || 0) - 1 }
			break
	}
	return mstate
}

let rcount = 0
console.log("rcount", rcount);

const Test1Page = () => {

	const [state, dispatch] = useReducer(reducer, initialState, );
	const middleware = useDispatchMiddleware(dispatch);

	console.log("rcount#2", rcount++);

	function increase() {
		dispatch({ type: "INCREASE" })
	}

	async function decrease() {
		//dispatch({ type: "DECREASE" })
		console.log("state", state.count);
		const result = await add10(state.count);
		console.log("result", result);
	}

	return (
		<>
			<div>Test1Page</div>
			<Spacer />
			<Spacer />
			<button className={"bg-sky-200 border-1 p-4"} onClick={increase}> increase </button>
			<span className={"p-4"}>count { state.count }</span>
			{/*<button className={"bg-sky-200 border-1 p-4"} onClick={() => decrease(state.count)}> decrease </button>*/}
			<button className={"bg-sky-200 border-1 p-4"} onClick={decrease}> decrease </button>
		</>
	);
};
export default Test1Page;
