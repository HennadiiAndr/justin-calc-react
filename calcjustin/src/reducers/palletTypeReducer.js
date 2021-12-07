const palletTypeReducer = (state = '', action) => {
   if (action.type === "SET_PALLET_TYPE") {
      return state = action.payload
   };
   return state;
};

export default palletTypeReducer;