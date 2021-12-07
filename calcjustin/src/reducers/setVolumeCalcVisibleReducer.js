const setVolumeCalcVisibleReducer = (state = false, action) => {
   if (action.type === "SET_VOL_CALC_VISIBILITY") {
      return state = !state
   };
   return state;
};

export default setVolumeCalcVisibleReducer;