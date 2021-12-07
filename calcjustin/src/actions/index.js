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