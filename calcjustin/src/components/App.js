import React from 'react';
import VolumeCalc from './inputs/VolumeCalc';
import Cities from './inputs/Cities';
import Input from './inputs/Input';
import Select from './inputs/Select';
import DeliveryTypeSelect from './inputs/DeliveryTypeSelect';
import CheckBoxInput from './inputs/CheckBoxInput';
import Header from './Header';
import '../Styles.css';
import PalletType from './inputs/PalletType';
import CalcDropDown from './inputs/CalcDropDown';



class App extends React.Component {
   state = {
      insurance: undefined,
      COD: undefined,
      weight: undefined,
      volume: undefined,
      sendingType: undefined,
      addressTakeIsChecked: false,
      addressDeliveryIsChecked: false,
      deliveryTypeCheck: undefined,
      palletType: undefined,
      cityFrom: undefined,
      cityWhere: undefined,
      length: undefined,
      width: undefined,
      height: undefined,
      volumeCalcVisibility: undefined
   }

   onInsuranceInput = (value) => {
      this.setState({ insurance: +value })
   }

   onCODInput = (value) => {
      this.setState({ COD: +value })
   }

   onWeightInput = (value) => {
      this.setState({ weight: +value })
   }

   onVolumeInput = (value) => {
      this.setState({ volume: +value })
   }

   onSelectItemHandler = (value) => {
      this.setState({ sendingType: value })
   }

   onCheckAddressTake = (value) => {
      this.setState({ addressTakeIsChecked: value })
   }

   onCheckAddressDelivery = (value) => {
      this.setState({ addressDeliveryIsChecked: value })
   }

   onDeliveryTypeCheck = (value) => {
      this.setState({ deliveryTypeCheck: value })
   }

   onPalletTypeCheck = (value) => {
      this.setState({ palletType: value })
   }

   onLengthInput = (value) => {
      this.setState({ length: value })
   }

   onWidthInput = (value) => {
      this.setState({ width: value })
   }

   onHeightInput = (value) => {
      this.setState({ height: value })
   }

   volumeCalculate = () => {
      this.setState({
         volumeCalculated: (this.state.length * this.state.width * this.state.height) / 1000000,
         volumeCalcVisibility: "none"
      }, () => { console.log(this.state.volumeCalculated) })
   }

   dropDownInit = (value) => {
      this.setState({ volumeCalcVisibility: value })
   }

   onClickOutSideHandler = () => {
      this.setState({ volumeCalcVisibility: "none" })
   }


   render() {
      return (
         <div>
            <div
               className="main"
               onClick={this.onClickOutSideHandler}
            >
               <div className="main_container">
                  <div className="calc_container">
                     <Header />
                     <div className="input-block_container">
                        <div className="input-block_sideLeft">
                           <div className="input-block_miniUpLeft">
                              <DeliveryTypeSelect
                                 titleOne="удобная передача"
                                 titleTwo="в пределах города"
                                 titleThree="по Украине"
                                 titleFour="в пределах области"
                                 onDeliveryTypeCheck={this.onDeliveryTypeCheck}
                              />
                              <Cities
                                 visibility={this.state.deliveryTypeCheck === "acrossUkraine" ? "flex" : ""}
                                 onCityFromSelect={this.onCityFromSelect}
                                 onCityWhereSelect={this.onCityWhereSelect}
                              />
                           </div>
                           <div className="input-block_mini">
                              <div className="insuranceCOD_block">
                                 <Input
                                    onInputHandler={this.onInsuranceInput}
                                    title='заявленная стоимость'
                                    placeholder='грн.'
                                    clsName='insurance'
                                 />
                                 <Input
                                    onInputHandler={this.onCODInput}
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
                                 <Select onSelectItemHandler={this.onSelectItemHandler} />
                                 <div className="input-addressDeliveryCheck-block">
                                    <div className="input-addressDeliveryCheck-container">
                                       <CheckBoxInput
                                          onCheckHandler={this.onCheckAddressTake}
                                          clsName="address-take_radio"
                                          title="адресный забор"
                                       />
                                       <div className="input-deliveryType-containerMini">
                                          <CheckBoxInput
                                             onCheckHandler={this.onCheckAddressDelivery}
                                             clsName="address-delivery_radio"
                                             title="адресная доставка"
                                          />
                                       </div>
                                    </div>
                                    <PalletType
                                       visibility={this.state.sendingType === "pallet" ? "flex" : ""}
                                       onPalletTypeCheck={this.onPalletTypeCheck}
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="input-block_miniweightvolume">
                              <div className="weightvolume_block">
                                 <Input
                                    onInputHandler={this.onWeightInput}
                                    title='Вес'
                                    placeholder='кг'
                                    clsName='weight'
                                 />
                                 <Input
                                    onInputHandler={this.onVolumeInput}
                                    title='Объем'
                                    placeholder='м.куб.'
                                    clsName='volume'
                                 />
                              </div>
                              <div className="volume-calculate_block">
                                 <div className="volume-calculate_container">
                                    <CalcDropDown
                                       dropDownInit={this.dropDownInit}
                                    />
                                 </div>
                                 <VolumeCalc
                                    onLengthInput={this.onLengthInput}
                                    onWidthInput={this.onWidthInput}
                                    onHeightInput={this.onHeightInput}
                                    volumeCalculate={this.volumeCalculate}
                                    visibility={this.state.volumeCalcVisibility === "flex" ? "flex" : ""}
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

export default App