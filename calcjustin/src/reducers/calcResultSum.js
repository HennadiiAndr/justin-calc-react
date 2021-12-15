const calcResultSum = (state = '', action) => {
   if (action.type === "CALC_RESULT_SUM") {
      return state = action.payload
   };
   return state;
};

export default calcResultSum;