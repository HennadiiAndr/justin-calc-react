const alertReducer = (state = '', action) => {
   if (action.type === "SET_ALERT_TEXT") {
      return state = action.payload;
   };
   return state;
};

export default alertReducer;