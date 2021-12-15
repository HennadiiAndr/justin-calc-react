const getTariffsReducer = (state = '', action) => {
   if (action.type === "GET_TARIFFS") {
      return state = action.payload
   };
   return state;
};

export default getTariffsReducer;