import inputInsuranceReducer from './inputInsuranceReducer';
import inputCODReducer from './inputCODReducer';
import inputWeightReducer from './inputWeightReducer';
import inputVolumeReducer from './inputVolumeReducer';
import selectRangeReducer from './selectRangeReducer';
import selectTypeReducer from './selectTypeReducer';
import addressTakeCheckReducer from './addressTakeCheckReducer';
import addressDeliveryCheckReducer from './addressDeliveryCheckReducer';
import palletTypeReducer from './palletTypeReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
   insurance: inputInsuranceReducer,
   COD: inputCODReducer,
   weight: inputWeightReducer,
   volume: inputVolumeReducer,
   range: selectRangeReducer,
   type: selectTypeReducer,
   addressTakeCheck: addressTakeCheckReducer,
   addressDeliveryCheck: addressDeliveryCheckReducer,
   palletType: palletTypeReducer
})

export default allReducers;