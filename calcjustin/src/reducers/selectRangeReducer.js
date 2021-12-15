const selectRangeReducer = (state = "comfort-pass", action) => {
   if (action.type === "SET_RANGE") {
      return state = action.payload
   };
   return state;
};

export default selectRangeReducer;