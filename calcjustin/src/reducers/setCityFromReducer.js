const setCityFromReducer = (state = '', action) => {
   if (action.type === "SET_CITY_FROM") {
      return state = action.payload
   };
   return state;
};

export default setCityFromReducer;