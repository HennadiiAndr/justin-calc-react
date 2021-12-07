

export const setInsurance = sum => {
   return {
      type: "SET_INSURANCE",
      payload: sum
   }
};

export const setCOD = sum => {
   return {
      type: "SET_COD",
      payload: sum
   }
}

export const setWeight = kilos => {
   return {
      type: "SET_WEIGHT",
      payload: kilos
   }
}

export const setVolume = cm => {
   return {
      type: "SET_VOLUME",
      payload: cm
   }
}

export const setRange = range => {
   return {
      type: "SET_RANGE",
      payload: range
   }
}

export const setType = type => {
   return {
      type: "SET_TYPE",
      payload: type
   }
}

export const setAddressTake = () => {
   return {
      type: "SET_ADDRESS_TAKE",
   }
}

export const setAddressDelivery = () => {
   return {
      type: "SET_ADDRESS_DELIVERY",
   }
}

export const setPalletType = type => {
   return {
      type: "SET_PALLET_TYPE",
      payload: type
   }
}

export const setCityFrom = city => {
   return {
      type: "SET_CITY_FROM",
      payload: city
   }
}

export const setCityTo = city => {
   return {
      type: "SET_CITY_TO",
      payload: city
   }
}

export const setLength = cm => {
   return {
      type: "SET_LENGTH",
      payload: cm
   }
}

export const setWidth = cm => {
   return {
      type: "SET_WIDTH",
      payload: cm
   }
}

export const setHeigth = cm => {
   return {
      type: "SET_HEIGTH",
      payload: cm
   }
}

export const setCalculatorModalVisibility = (data) => {
   return {
      type: "SET_VOL_CALC_VISIBILITY",
      payload: data
   }
}

export const calcVolume = () => {
   return (dispatch, getState)=> {
      const state= getState();
      const volume=(state.length*state.width*state.height)/1000000;
      dispatch(setVolume(volume));
      dispatch(setCalculatorModalVisibility(false));
   }
}