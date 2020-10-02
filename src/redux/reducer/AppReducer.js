const initialState = {
  transactions: [],
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTIONS":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "REMOVE_TRANSACTIONS":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;
