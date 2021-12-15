const setWidthReducer = (state = '', action) => {
   if (action.type === "SET_WIDTH") {
      return state = +action.payload
   };
   return state;
};

export default setWidthReducer;