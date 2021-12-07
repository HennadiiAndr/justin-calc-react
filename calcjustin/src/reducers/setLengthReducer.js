const setLengthReducer = (state = '', action) => {
   if (action.type === "SET_LENGTH") {
      return state = action.payload
   };
   return state;
};

export default setLengthReducer;