const addressTakeCheck = (state = false, action) => {
   if (action.type === "SET_ADDRESS_TAKE") {
      return state = !state
   };
   return state;
};

export default addressTakeCheck;