const calcAddressTakeSum = (state = 0, action) => {
   if (action.type === "CALC_ADDRESSTAKE_SUM") {
      return state = +action.payload;
   };
   return state;
};

export default calcAddressTakeSum;