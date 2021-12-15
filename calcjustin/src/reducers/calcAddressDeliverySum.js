const calcAddressDeliverySum = (state = '', action) => {
   if (action.type === "CALC_ADDRESSDELIVERY_SUM") {
      return state = +action.payload;
   };
   return state;
};

export default calcAddressDeliverySum;