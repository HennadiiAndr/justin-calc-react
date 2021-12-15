const setZoneRateReducer = (state = '', action) => {
   if (action.type === "SET_ZONE_RATE") {
      return state = action.payload;
   };
   return state;
};

export default setZoneRateReducer;