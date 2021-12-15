const setCODPaymentReducer = (state = '', action) => {
   if (action.type === "SET_COD_PAYMENT") {
      return state = action.payload;
   };
   return state;
};

export default setCODPaymentReducer;