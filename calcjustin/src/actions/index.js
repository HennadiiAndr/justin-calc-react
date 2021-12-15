import getDataFromApi from '../apis/getDataFromApi';

export const setInsurance = sum => {
   return (dispatch) => {
      dispatch(calcInsurancePayment(sum))
      dispatch({ type: "SET_INSURANCE", payload: sum })
   }
};

export const setCOD = sum => {
   return {
      type: "SET_COD",
      payload: sum
   }
}

export const setWeight = kilos => {
   return (dispatch) => {
      dispatch({
         type: "SET_WEIGHT",
         payload: kilos
      });
      dispatch(checkWeight(kilos));
      dispatch(calcActualWeight(kilos));
   }
}

export const setVolume = cm => {
   return (dispatch) => {
      dispatch({ type: "SET_VOLUME", payload: cm });
      dispatch(calcWeightVolume(cm));
      dispatch(checkVolume(cm));
   }
}

export const setRange = range => {
   return (dispatch) => {
      dispatch({
         type: "SET_RANGE",
         payload: range
      });
      dispatch(calcTariffSum(range));
   }
}

export const setType = type => {
   return (dispatch) => {
      dispatch({ type: "SET_TYPE", payload: type });
      dispatch(calcTariffSum());
   };
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
   return (dispatch) => {
      dispatch({ type: "SET_PALLET_TYPE", payload: type });
      dispatch(calcTariffSum(type));
   }
}

export const setCityFrom = city => {
   return {
      type: "SET_CITY_FROM",
      payload: city
   }
}

export const setCityTo = city => {
   return (dispatch) => {
      dispatch({
         type: "SET_CITY_TO",
         payload: city
      });
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
   return (dispatch, getState) => {
      const state = getState();
      const volume = (state.length * state.width * state.height) / 1000000;
      dispatch(setVolume(volume));
      dispatch(setCalculatorModalVisibility(false));
   }
}

export const getCities = () => {
   return async (dispatch) => {
      const response = await getDataFromApi.get('/get-cities')
      dispatch({ type: "GET_CITIES", payload: response.data })
   }
}

export const getTariffs = () => {
   return async (dispatch) => {
      const response = await getDataFromApi.get('/get-tariffs')
      dispatch({ type: "GET_TARIFFS", payload: response.data })
   }
}

export const calcInsurancePayment = () => {
   return (dispatch, getState) => {
      const state = getState();
      const insurancePayment = state.insurance > 200 ? state.insurance * 0.05 : 0;
      dispatch({ type: "CALC_INSURANCE_PAYMENT", payload: insurancePayment })
   }
}

export const setCODPayment = () => {
   return (dispatch, getState) => {
      const state = getState();
      const CODPayment = (state.COD * 0.02) + 15;
      dispatch({ type: "SET_COD_PAYMENT", payload: CODPayment })
   }
}

export const calcWeightVolume = () => {
   return (dispatch, getState) => {
      const state = getState();
      const weightVolume = state.volume * 250;
      dispatch({ type: "CALC_WEIGHTVOLUME", payload: weightVolume });
      dispatch(calcActualWeight(weightVolume));
   }
}

export const setDeliveryTypes = () => {
   return (dispatch) => {
      const deliveryTypes = {
         "посылка": '',
         "груз": '',
         "палета": ''
      }
      dispatch({ type: "SET_DELIVERYTYPES", payload: deliveryTypes });
   }
}

export const setResultBlockVisibility = () => {
   return {
      type: "IS_RESULT_BLOCK_VISIBLE"
   }
}

export const setAlertText = (text) => {
   return {
      type: "SET_ALERT_TEXT",
      payload: text
   }
}

export const closeAlert = () => {
   return (dispatch) => {
      dispatch(setAlertText(""));
   }
}

export const checkVolume = () => {
   return (dispatch, getState) => {
      const state = getState();
      if (state.volume > 4.32) {
         dispatch(setVolume(0));
         dispatch(setAlertText("слишком большой объем"));
      } else if (state.volume < 0) {
         dispatch(setVolume(0));
         dispatch(setAlertText("объем должен быть больше 0"));
      } else if ((state.type === "посылка") && (state.volume > 0.018)) {
         dispatch(setType("груз"));
      } else if ((state.type === "груз") && (0 < state.volume && state.volume < 0.018)) {
         dispatch(setType("посылка"));
      }
   }
}

export const checkDimentions = () => {
   return (dispatch, getState) => {
      const state = getState();
      if ((state.length + state.width + state.height) > 540 && 0 > (state.length + state.width + state.height)) {
         dispatch(setAlertText("сумма всех сторон должна быть 0<>540"))
      }

      if (state.height > 180) {
         dispatch(setAlertText("Высота должна быть не больше 180"));
         dispatch(setHeigth(0));
      }

      if (state.type === "посылка" && (state.length + state.width + state.height) > 120) {
         dispatch(setType("груз"));
      }

      if ((state.type === "посылка") && (state.length > 90 || state.width > 90 || state.height > 90)) {
         dispatch(setType("груз"));
      }

      if ((state.type === "груз") && (state.length > 300 || state.width > 150 || state.height > 150)) {
         dispatch(setAlertText("сторона должна быть не больше 150см"));
         dispatch(setLength(0));
         dispatch(setWidth(0));
         dispatch(setHeigth(0));
      }
   }
}

export const checkWeight = () => {
   return (dispatch, getState) => {
      const state = getState();
      if ((state.type === "посылка") && state.weight > 30) {
         dispatch(setType("груз"));
      }

      if ((state.type === "груз") && state.weight < 30) {
         dispatch(setType("посылка"));
      }

      if (1000 < state.weight || 0 > state.weight) {
         dispatch(setAlertText("вес должен быть 0<>1000"));
         dispatch(setWeight(0));
      }
   }
}

export const calcActualWeight = () => {
   return (dispatch, getState) => {
      const state = getState();
      let actualWeight = 0;
      if (+state.weight > +state.weightVolume) {
         actualWeight = +state.weight;
      } else {
         actualWeight = +state.weightVolume;
      };
      dispatch({ type: "SET_ACTUAL_WEIGHT", payload: actualWeight });
      dispatch(calcAdressDeliverySum(actualWeight));
      dispatch(calcAdressTakeSum(actualWeight));
      dispatch(calcTariffSum(actualWeight));
   }
}

export const setZone = () => {
   return (dispatch, getState) => {
      const state = getState();
      const zone =
         ((state.cityFrom !== "") && (state.cityTo !== "")) ?
            (state.range === "across-Ukraine" ? state.citiesObject[state.cityFrom][state.cityTo] : '') : ''

      dispatch({ type: "SET_ZONE_NUMBER", payload: zone });
      dispatch(setRate());
      dispatch(calcTariffSum());
   }
}

export const setRate = () => {
   return (dispatch, getState) => {
      const state = getState();
      let rate = '';
      if (state.zone === 1) {
         rate = 2.5
      } else if (state.zone === 2) {
         rate = 3
      } else if (state.zone === 3) {
         rate = 4
      } else if (state.zone === 4) {
         rate = 5.5
      };
      dispatch({ type: "SET_ZONE_RATE", payload: rate });
   }
}

export const calcAdressTakeSum = () => {
   return (dispatch, getState) => {
      const state = getState();
      let sum = 0;
      if (state.addressTakeCheck === true) {
         if (state.type === "груз" || state.type === "посылка") {
            if (state.actualWeight <= 1) {
               sum = state.tariffs.addressTakeOrDeliveryRate[0].price;
            } else if (state.actualWeight > 1 && state.actualWeight <= 5) {
               sum = state.tariffs.addressTakeOrDeliveryRate[1].price;
            } else if (state.actualWeight > 5 && state.actualWeight <= 10) {
               sum = state.tariffs.addressTakeOrDeliveryRate[2].price;
            } else if (state.actualWeight > 10 && state.actualWeight <= 30) {
               sum = state.tariffs.addressTakeOrDeliveryRate[3].price;
            } else if (state.actualWeight > 30) {
               sum = (state.tariffs.addressTakeOrDeliveryRate[3].price + (0.5 * (state.actualWeight - 30)));
            }
         } else {
            sum = 150;
         }
      } else {
         sum = 0;
      };
      dispatch({ type: "CALC_ADDRESSTAKE_SUM", payload: sum });
   }
}

export const calcAdressDeliverySum = () => {
   return (dispatch, getState) => {
      const state = getState();
      let sum = 0;
      if (state.addressDeliveryCheck === true) {
         if (state.type === "груз" || state.type === "посылка") {
            if (state.actualWeight <= 1) {
               sum = state.tariffs.addressTakeOrDeliveryRate[0].price;
            } else if (state.actualWeight > 1 && state.actualWeight <= 5) {
               sum = state.tariffs.addressTakeOrDeliveryRate[1].price;
            } else if (state.actualWeight > 5 && state.actualWeight <= 10) {
               sum = state.tariffs.addressTakeOrDeliveryRate[2].price;
            } else if (state.actualWeight > 10 && state.actualWeight <= 30) {
               sum = state.tariffs.addressTakeOrDeliveryRate[3].price;
            } else if (state.actualWeight > 30) {
               sum = (state.tariffs.addressTakeOrDeliveryRate[3].price + (0.5 * (state.actualWeight - 30)));
            }
         } else {
            sum = 150;
         }
      } else {
         sum = 0;
      };
      dispatch({ type: "CALC_ADDRESSDELIVERY_SUM", payload: sum });
   }
};

export const calcTariffSum = () => {
   return (dispatch, getState) => {
      const state = getState();
      let tariffSum = 0;
      let type;
      let zoneNumber;
      if (state.type === "посылка") {
         type = "packadge";
      } else if (state.type === "груз") {
         type = "load";
      } else if (state.type === "палета") {
         type = "pallet";
      };
      zoneNumber = state.zone - 1;

      for (let key in state.tariffs) {
         if (key === type) {
            if (key === "pallet") {
               let newObj = state.tariffs[key];
               for (let key in newObj) {
                  if (key === state.palletType) {
                     let palletTypeObj = newObj[key];
                     for (let key in palletTypeObj) {
                        if (key === state.range) {
                           if (key === "across-Ukraine") {
                              let palletAcrossObj = palletTypeObj[key];
                              for (let key in palletAcrossObj) {
                                 if (+key === zoneNumber) {
                                    let palletZoneArr = palletAcrossObj[key];
                                    // eslint-disable-next-line
                                    palletZoneArr.forEach(elem => {
                                       if (elem.minweight < state.actualWeight && state.actualWeight <= elem.maxweight) {
                                          tariffSum = elem.price;
                                       };
                                    });
                                 }
                              }
                           }
                           let palletRangeArr = palletTypeObj[key];
                           // eslint-disable-next-line
                           palletRangeArr.forEach(elem => {
                              if (elem.minweight < state.actualWeight && state.actualWeight <= elem.maxweight) {
                                 tariffSum = elem.price;
                              };
                           });
                        }
                     }
                  }
               }
            } else {
               let loadPackObj = state.tariffs[key];
               for (let key in loadPackObj) {
                  if (key === state.range) {
                     if (key === "across-Ukraine") {
                        let loadPackAcrossArr = loadPackObj[key];
                        let biggestPrice;
                        loadPackAcrossArr.forEach(elem => {

                           biggestPrice = elem.price;

                        });
                        // eslint-disable-next-line
                        loadPackAcrossArr.forEach(elem => {
                           if (state.actualWeight <= 30) {
                              if (elem.minweight < state.actualWeight && state.actualWeight <= elem.maxweight) {
                                 tariffSum = elem.price;
                              };
                           } else {
                              tariffSum = (biggestPrice + (state.rate * (state.actualWeight - 30)));
                           }

                        })
                     } else {
                        let loadPackArr = loadPackObj[key];
                        let biggestPrice;
                        loadPackArr.forEach(elem => {
                           biggestPrice = elem.price;
                        });

                        // eslint-disable-next-line
                        loadPackArr.forEach(elem => {
                           if (state.actualWeight <= 30) {
                              if (elem.minweight < state.actualWeight && state.actualWeight <= elem.maxweight) {
                                 tariffSum = elem.price;
                              };
                           } else if (state.range === "comfort-pass") {
                              tariffSum = (biggestPrice + (0.6 * (state.actualWeight - 30)));
                           } else if (state.range === "city-limits") {
                              tariffSum = (biggestPrice + (1.4 * (state.actualWeight - 30)));
                           } else if (state.range === "region-limit") {
                              tariffSum = (biggestPrice + (1.9 * (state.actualWeight - 30)));
                           }

                        });
                     }
                  }
               }
            }
         }
      }
      dispatch({ type: "CALC_TARIFF_SUM", payload: tariffSum });
   }
}