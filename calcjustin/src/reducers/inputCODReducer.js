const inputCODReducer = (state = '', action) => {
   if (action.type === "SET_COD") {
      return state = action.payload
   };
   return state;
};

export default inputCODReducer;