const calcTariffSum = (state = '', action) => {
   if (action.type === "CALC_TARIFF_SUM") {
      return state = action.payload;
   };
   return state;
};

export default calcTariffSum;