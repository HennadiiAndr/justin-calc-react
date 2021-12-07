import React from 'react';
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
import Header from './Header';
import '../Styles.css';
import PalletType from './inputs/PalletType';
import CalcDropDown from './inputs/CalcDropDown';

import { connect } from 'react-redux';
import { setCalculatorModalVisibility } from '../actions';


class App extends React.Component {

   onClickHandler = (e) => {
      e.stopPropagation();
   }

   render() {
      return (
         <div>
            <div
               className="main"
               onClick={() => this.props.setCalculatorModalVisibility()}
            >
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
                                 visibility={this.props.range === "acrossUkraine" ? "flex" : ""}
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
                                       <div className="input-deliveryType-containerMini">
                                          <AddressDeliveryCheck

                                             clsName="address-delivery_radio"
                                             title="адресная доставка"
                                          />
                                       </div>
                                    </div>
                                    <PalletType
                                       visibility={this.props.type === "pallet" ? "flex" : ""}
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
                                    <CalcDropDown
                                       dropDownInit={this.dropDownInit}
                                    />
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
                     <div className="resultBtn-container">
                        <button className="resultbtn">УЗНАТЬ ЦЕНУ</button>
                     </div>
                     <div className="result_block">
                        <div className="result_block-container">
                           <div className="result_titles">
                              <div className="rate-block">
                                 <div className="rate-text">Тариф:</div>
                                 <div className="rate"></div>
                              </div>
                              <div className="addressTakeDisplay-block">
                                 <div className="addressTakeDisplay-text">Адресный забор:</div>
                                 <div className="addressTakeDisplay"></div>
                              </div>
                              <div className="addressDeliveryDisplay-block">
                                 <div className="addressDeliveryDisplay-text">Адресная доставка:</div>
                                 <div className="addressDeliveryDisplay"></div>
                              </div>
                              <div className="insurancePay-block">
                                 <div className="insurancePay-text">Страховой платеж:</div>
                                 <div className="insurancePay"></div>
                              </div>
                              <div className="CODpay-block">
                                 <div className="CODpay-text">Комиссия за наложенный платеж:</div>
                                 <div className="CODpay"></div>
                              </div>

                           </div>
                           <div className="result_display_block">
                              <div className="result-display-title">Итоговая стоимость</div>
                              <div className="result-display-field">
                                 <div className="result-display"></div>
                              </div>
                           </div>

                        </div>
                     </div>
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
      volumeCalcVisibility: state.volumeCalcVisibility
   }
}

export default connect(mapStateToProps, { setCalculatorModalVisibility })(App)