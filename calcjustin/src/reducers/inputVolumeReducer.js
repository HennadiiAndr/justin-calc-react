const inputVolumeReducer = (state = '', action) => {
   if (action.type === "SET_VOLUME") {
      return state = action.payload
   };
   return state;
};

export default inputVolumeReducer;