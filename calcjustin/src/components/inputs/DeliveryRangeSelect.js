import React from 'react';
import { connect } from 'react-redux';
import { setRange } from '../../actions';
import '../../Styles.css';

class DeliveryRangeSelect extends React.Component {


   render() {
      return (
         <div className="input-deliveryType-container">
            <div className="input-deliveryType-containerMini">
               <div className="input-minicontainer">
                  <input
                     type='radio'
                     onChange={(e) => this.props.setRange(e.target.value)}
                     value="comfort-pass"
                     checked={this.props.range === "comfort-pass"}
                     className="comfort-pass_radio"
                     name="deliveryType"></input>
                  <label htmlFor="comfort-pass_radio">{this.props.titleOne}</label>
               </div>
               <div className="input-minicontainer">
                  <input
                     type='radio'
                     onChange={(e) => this.props.setRange(e.target.value)}
                     value="city-limits"
                     checked={this.props.range === "city-limits"}
                     className="city-limits_radio"
                     name="deliveryType"></input>
                  <label htmlFor="city-limits_radio">{this.props.titleTwo}</label>
               </div>
            </div>
            <div className="input-deliveryType-containerMini">
               <div className="input-minicontainer">
                  <input
                     type='radio'
                     onChange={(e) => this.props.setRange(e.target.value)}
                     value="across-Ukraine"
                     checked={this.props.range === "across-Ukraine"}
                     className="across-Ukraine_radio"
                     name="deliveryType"></input>
                  <label htmlFor="across-Ukraine_radio">{this.props.titleThree}</label>
               </div>
               <div className="input-minicontainer">
                  <input
                     type='radio'
                     onChange={(e) => this.props.setRange(e.target.value)}
                     value="region-limit"
                     checked={this.props.range === "region-limit"}
                     className="region-limit_radio"
                     name="deliveryType"></input>
                  <label htmlFor="region-limits_radio">{this.props.titleFour}</label>
               </div>
            </div>
         </div>
      );
   };
}

const mapStateToProps = (state) => {
   return { range: state.range }
}

export default connect(mapStateToProps, { setRange })(DeliveryRangeSelect);