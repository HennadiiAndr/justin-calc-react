const calcInsurancePayment = (state = '', action) => {
   if (action.type === "CALC_INSURANCE_PAYMENT") {
      return state = action.payload
   };
   return state;
};

export default calcInsurancePayment;