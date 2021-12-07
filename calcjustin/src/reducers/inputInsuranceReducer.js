const inputInsuranceReducer = (state = '', action) => {
   if (action.type === "SET_INSURANCE") {
      return state = action.payload
   };
   return state;
};

export default inputInsuranceReducer;