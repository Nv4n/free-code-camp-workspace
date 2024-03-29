import Redux from "redux";
const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
	switch (action.type) {
		case "REMOVE_ITEM":
			// Don't mutate state here or the tests will fail
			return state.filter((val, ind) => ind !== action.index);
		default:
			return state;
	}
};

const removeItem = (index) => {
	return {
		type: "REMOVE_ITEM",
		index,
	};
};

const store = Redux.createStore(immutableReducer);
