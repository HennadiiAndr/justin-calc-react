const calcWeightVolume = (state = 0, action) => {
   if (action.type === "CALC_WEIGHTVOLUME") {
      return state = +action.payload;
   };
   return state;
};

export default calcWeightVolume;