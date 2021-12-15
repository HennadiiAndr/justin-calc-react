import inputInsuranceReducer from './inputInsuranceReducer';
import inputCODReducer from './inputCODReducer';
import inputWeightReducer from './inputWeightReducer';
import inputVolumeReducer from './inputVolumeReducer';
import selectRangeReducer from './selectRangeReducer';
import selectTypeReducer from './selectTypeReducer';
import addressTakeCheck from './addressTakeCheck';
import addressDeliveryCheck from './addressDeliveryCheck';
import palletTypeReducer from './palletTypeReducer';
import setCityFromReducer from './setCityFromReducer';
import setCityToReducer from './setCityToReducer';
import setLengthReducer from './setLengthReducer';
import setWidthReducer from './setWidthReducer';
import setHeigthReducer from './setHeigthReducer';
import setVolumeCalcVisibleReducer from './setVolumeCalcVisibleReducer';
import getCitiesReducer from './getCitiesReducer';
import getTariffsReducer from './getTariffsReducer';
import calcInsurancePayment from './calcInsurancePayment';
import setResultBlockVisibilityReducer from './setResultBlockVisibilityReducer';
import setCODPaymentReducer from './setCODPaymentReducer';
import calcWeightVolume from './calcWeightVolume';
import deliveryTypesReducer from './deliveryTypesReducer';
import alertReducer from './alertReducer';
import calcActualWeight from './calcActualWeight';
import setZoneNumberReducer from './setZoneNumberReducer';
import setZoneRateReducer from './setZoneRateReducer';
import calcAddressTakeSum from './calcAddressTakeSum';
import calcAddressDeliverySum from './calcAddressDeliverySum';
import calcTariffSum from './calcTariffSum';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
   insurance: inputInsuranceReducer,
   COD: inputCODReducer,
   weight: inputWeightReducer,
   volume: inputVolumeReducer,
   range: selectRangeReducer,
   type: selectTypeReducer,
   addressTakeCheck: addressTakeCheck,
   addressDeliveryCheck: addressDeliveryCheck,
   palletType: palletTypeReducer,
   citiesObject: getCitiesReducer,
   tariffs: getTariffsReducer,
   cityFrom: setCityFromReducer,
   cityTo: setCityToReducer,
   length: setLengthReducer,
   width: setWidthReducer,
   height: setHeigthReducer,
   volumeCalcVisibility: setVolumeCalcVisibleReducer,
   insurancePayment: calcInsurancePayment,
   resultBlockVisibility: setResultBlockVisibilityReducer,
   CODPayment: setCODPaymentReducer,
   weightVolume: calcWeightVolume,
   deliveryTypesList: deliveryTypesReducer,
   alertText: alertReducer,
   actualWeight: calcActualWeight,
   zone: setZoneNumberReducer,
   rate: setZoneRateReducer,
   addressTakeSum: calcAddressTakeSum,
   addressDeliverySum: calcAddressDeliverySum,
   tariffSum: calcTariffSum
})

export default allReducers;