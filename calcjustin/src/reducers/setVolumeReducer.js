const setVolumeCalcReducer = (state = 0, action) => {
   if (action.type === "CALC_VOLUME") {
      return state = +action.payload
   };
   return state;
};

export default setVolumeCalcReducer;