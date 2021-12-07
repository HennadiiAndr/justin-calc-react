const selectTypeReducer = (state = '', action) => {
   if (action.type === "SET_TYPE") {
      return state = action.payload
   };
   return state;
};

export default selectTypeReducer;