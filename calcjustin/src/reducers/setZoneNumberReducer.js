const setZoneNumberReducer = (state = 0, action) => {
   if (action.type === "SET_ZONE_NUMBER") {
      return state = +action.payload;
   };
   return state;
};

export default setZoneNumberReducer;