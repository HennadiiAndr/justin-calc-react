const calcActualWeight = (state = 0, action) => {
   if (action.type === "SET_ACTUAL_WEIGHT") {
      return state = +action.payload;
   };
   return state;
};

export default calcActualWeight;