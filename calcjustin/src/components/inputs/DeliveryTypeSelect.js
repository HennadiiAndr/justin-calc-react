import React from 'react';
import '../../Styles.css';

class DeliveryTypeSelect extends React.Component {
   state = {
      selectedOption: ''
   }

   onVolumeChange = (event) => {
      this.setState({ selectedOption: event.target.value },
         () => { this.props.onDeliveryTypeCheck(this.state.selectedOption) }
      )
   }


   render() {
      return (
         <div className="input-deliveryType-container">
            <div className="input-deliveryType-containerMini">
               <div className="input-minicontainer">
                  <input
                     type='radio'
                     onChange={this.onVolumeChange}
                     value="comfortPass"
                     checked={this.state.selectedOption === "comfortPass"}
                     className="comfort-pass_radio"
                     name="deliveryType"></input>
                  <label htmlFor="comfort-pass_radio">{this.props.titleOne}</label>
               </div>
               <div className="input-minicontainer">
                  <input
                     type='radio'
                     onChange={this.onVolumeChange}
                     value="cityLimits"
                     checked={this.state.selectedOption === "cityLimits"}
                     className="city-limits_radio"
                     name="deliveryType"></input>
                  <label htmlFor="city-limits_radio">{this.props.titleTwo}</label>
               </div>
            </div>
            <div className="input-deliveryType-containerMini">
               <div className="input-minicontainer">
                  <input
                     type='radio'
                     onChange={this.onVolumeChange}
                     value="acrossUkraine"
                     checked={this.state.selectedOption === "acrossUkraine"}
                     className="across-Ukraine_radio"
                     name="deliveryType"></input>
                  <label htmlFor="across-Ukraine_radio">{this.props.titleThree}</label>
               </div>
               <div className="input-minicontainer">
                  <input
                     type='radio'
                     onChange={this.onVolumeChange}
                     value="regionLimit"
                     checked={this.state.selectedOption === "regionLimit"}
                     className="region-limit_radio"
                     name="deliveryType"></input>
                  <label htmlFor="region-limits_radio">{this.props.titleFour}</label>
               </div>
            </div>
         </div>
      );
   };
}

export default DeliveryTypeSelect;