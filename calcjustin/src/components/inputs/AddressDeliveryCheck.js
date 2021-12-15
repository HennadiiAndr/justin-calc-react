import React from 'react';
import '../../Styles.css';

import { connect } from 'react-redux';
import {
   setAddressDelivery,
   calcAdressDeliverySum
} from '../../actions';

class AddressDeliveryCheck extends React.Component {

   componentDidUpdate() {
      this.props.setAdressDeliverySum();
   }

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
                     this.props.setAddressDelivery(e.target.checked);
                     this.props.calcAdressDeliverySum();
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
      addressDeliveryCheck: state.addressDeliveryCheck,
      addressDeliverySum: state.addressDeliverySum
   }
}

export default connect(mapStateToProps, { setAddressDelivery, calcAdressDeliverySum })(AddressDeliveryCheck);