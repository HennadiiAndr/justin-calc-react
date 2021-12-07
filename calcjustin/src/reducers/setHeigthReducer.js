const setHeigthReducer = (state = '', action) => {
   if (action.type === "SET_HEIGTH") {
      return state = action.payload
   };
   return state;
};

export default setHeigthReducer;