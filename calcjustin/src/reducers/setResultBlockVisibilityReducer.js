const setResultBlockVisibilityReducer = (state = false, action) => {
   if (action.type === "IS_RESULT_BLOCK_VISIBLE") {
      return state = true;
   };
   return state;
};

export default setResultBlockVisibilityReducer;