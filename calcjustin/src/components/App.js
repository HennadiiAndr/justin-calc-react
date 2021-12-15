import React from 'react';
import Alert from './Alert';
import ModalVolumeCalculator from './inputs/ModalVolumeCalculator';
import Cities from './inputs/Cities';
import InputInsurance from './inputs/InputIsurance';
import InputCOD from './inputs/InputCOD';
import InputWeight from './inputs/InputWeight';
import InputVolume from './inputs/InputVolume';
import DeliveryTypeSelect from './inputs/DeliveryTypeSelect';
import DeliveryRangeSelect from './inputs/DeliveryRangeSelect';
import AddressTakeCheck from './inputs/AddressTakeCheck';
import AddressDeliveryCheck from './inputs/AddressDeliveryCheck';
import ResultDisplay from './ResultDisplay';
import ResultDisplayButton from './ResultDisplayButton';
import Header from './Header';
import '../Styles.css';
import PalletType from './inputs/PalletType';
import CalcDropDown from './inputs/CalcDropDown';

import { connect } from 'react-redux';
import {
   getCities,
   getTariffs,
   setCalculatorModalVisibility,
   setDeliveryTypes
} from '../actions';


class App extends React.Component {

   componentDidMount() {
      this.props.getCities();
      this.props.getTariffs();
      this.props.setDeliveryTypes();
   }

   render() {
      return (
         <div>
            <div
               className="main"
               onClick={() => this.props.volumeCalcVisibility ? this.props.setCalculatorModalVisibility() : ''}
            >
               <Alert />
               <div className="main_container">
                  <div className="calc_container">
                     <Header />
                     <div className="input-block_container">
                        <div className="input-block_sideLeft">
                           <div className="input-block_miniUpLeft">
                              <DeliveryRangeSelect
                                 titleOne="удобная передача"
                                 titleTwo="в пределах города"
                                 titleThree="по Украине"
                                 titleFour="в пределах области"
                              />
                              <Cities
                                 visibility={this.props.range === "across-Ukraine" ? "flex" : ""}
                              />
                           </div>
                           <div className="input-block_mini">
                              <div className="insuranceCOD_block">
                                 <InputInsurance
                                    title='заявленная стоимость'
                                    placeholder='грн.'
                                    clsName='insurance'
                                 />
                                 <InputCOD
                                    title='наложенный платеж'
                                    placeholder='грн.'
                                    clsName='insurance'
                                 />
                              </div>
                           </div>
                        </div>
                        <div className="input-block_side">
                           <div className="input-block_miniUp">
                              <div className="sendAddressDelivery_container">
                                 <DeliveryTypeSelect />
                                 <div className="input-addressDeliveryCheck-block">
                                    <div className="input-addressDeliveryCheck-container">
                                       <AddressTakeCheck
                                          clsName="address-take_radio"
                                          title="адресный забор"
                                       />
                                       <AddressDeliveryCheck
                                          clsName="address-delivery_radio"
                                          title="адресная доставка"
                                       />
                                    </div>
                                    <PalletType
                                       visibility={this.props.type === "палета" ? "flex" : ""}
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="input-block_miniweightvolume">
                              <div className="weightvolume_block">
                                 <InputWeight
                                    title='Вес'
                                    placeholder='кг'
                                    clsName='weight'
                                 />
                                 <InputVolume
                                    title='Объем'
                                    placeholder='м.куб.'
                                    clsName='volume'
                                 />
                              </div>
                              <div className="volume-calculate_block">
                                 <div
                                    className="volume-calculate_container"
                                    onClick={this.onClickHandler}
                                 >
                                    <CalcDropDown />
                                 </div>
                                 <ModalVolumeCalculator
                                    onLengthInput={this.onLengthInput}
                                    onWidthInput={this.onWidthInput}
                                    onHeightInput={this.onHeightInput}
                                    volumeCalculate={this.volumeCalculate}
                                    visibility={this.props.volumeCalcVisibility === true ? "flex" : ""}
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                     <ResultDisplayButton />
                     <ResultDisplay />
                  </div>
               </div>
            </div>
         </div>
      );
   };
}

const mapStateToProps = state => {
   return {
      range: state.range,
      type: state.type,
      length: state.length,
      width: state.width,
      height: state.height,
      volumeCalcVisibility: state.volumeCalcVisibility,
      citiesObject: state.citiesObject,
      tariffs: state.tariffs,
      deliveryTypesList: state.deliveryTypesList,
      zone: state.zone,
      packadgeTariff: state.packadgeTariff,
      loadTariff: state.loadTariff,
      palletTariff: state.palletTariff
   }
}

export default connect(mapStateToProps, {
   getCities,
   getTariffs,
   setCalculatorModalVisibility,
   setDeliveryTypes
})(App)