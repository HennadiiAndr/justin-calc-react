const getCitiesReducer = (state = '', action) => {
   if (action.type === "GET_CITIES") {
      return state = action.payload
   };
   return state;
};

export default getCitiesReducer;