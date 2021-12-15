const deliveryTypesReducer = (state = 'посылка', action) => {
   if (action.type === "SET_DELIVERYTYPES") {
      return state = action.payload;
   };
   return state;
};

export default deliveryTypesReducer;