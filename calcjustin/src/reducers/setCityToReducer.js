const setCityToReducer = (state = '', action) => {
   if (action.type === "SET_CITY_TO") {
      return state = action.payload
   };
   return state;
};

export default setCityToReducer;