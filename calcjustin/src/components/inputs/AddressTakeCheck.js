import React from 'react';
import '../../Styles.css';

import { connect } from 'react-redux';
import {
   setAddressTake,
   calcAdressTakeSum
} from '../../actions';

class AddressTakeCheck extends React.Component {

   render() {
      return (
         <div className="input-deliveryType-containerMini">
            <div className="input-minicontainer">
               <input
                  type='checkbox'
                  className={this.props.clsName}
                  name="addressTake"
                  checked={this.props.addressTakeCheck}
                  onChange={(e) => {
                     this.props.setAddressTake(e.target.checked);
                     this.props.calcAdressTakeSum();
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
      addressTakeCheck: state.addressTakeCheck,
      addressTakeSum: state.addressTakeSum
   }
}

export default connect(mapStateToProps, { setAddressTake, calcAdressTakeSum })(AddressTakeCheck);