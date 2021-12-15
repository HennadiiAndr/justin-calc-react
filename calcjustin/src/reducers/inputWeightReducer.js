const inputWeightReducer = (state = '', action) => {
   if (action.type === "SET_WEIGHT") {
      return state = +action.payload
   };
   return state;
};

export default inputWeightReducer;