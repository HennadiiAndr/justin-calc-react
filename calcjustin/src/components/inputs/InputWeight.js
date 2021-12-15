import React from 'react';
import { connect } from 'react-redux';
import {
   setWeight
}
   from '../../actions';
import '../../Styles.css';

class InputWeight extends React.Component {

   render() {
      return (
         <div className="insurance_container">
            <div className="text">{this.props.title}</div>
            <input
               className={this.props.clsName}
               type="number"
               value={this.props.weight}
               placeholder={this.props.placeholder}
               onChange={(e) => {
                  this.props.setWeight(e.target.value);
               }}
            ></input>
         </div>
      );
   }

}

const mapStateToProps = (state) => {
   return {
      weight: state.weight,
      addressTakeSum: state.addressTakeSum,
      actualWeight: state.actualWeight,
      addressDeliverySum: state.addressDeliverySum,
      tariffSum: state.tariffSum
   };
}

export default connect(mapStateToProps,
   {
      setWeight
   }
)(InputWeight);