import React from 'react';
import '../../Styles.css';

import { connect } from 'react-redux';
import {
   setAddressDelivery
} from '../../actions';

class AddressDeliveryCheck extends React.Component {

   render() {
      return (
         <div className="input-deliveryType-containerMini">
            <div className="input-minicontainer">
               <input
                  type='checkbox'
                  className={this.props.clsName}
                  name="addressTake"
                  checked={this.props.addressDeliveryCheck}
                  onChange={(e) => {
                     this.props.setAddressDelivery(e.target.checked)
                  }}
               ></input>
               <label htmlFor="address-take">{this.props.title}</label>
            </div>
         </div>
      );
   };
}

const mapStateToProps = state => {
   return {
      addressDeliveryCheck: state.addressDeliveryCheck
   }
}

export default connect(mapStateToProps, { setAddressDelivery })(AddressDeliveryCheck);