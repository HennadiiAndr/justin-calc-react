import React from 'react';
import { connect } from 'react-redux';
import { setInsurance, calcInsurancePayment } from '../../actions';
import '../../Styles.css';

class InputInsurance extends React.Component {

   render() {
      return (
         <div className="insurance_container">
            <div className="text">{this.props.title}</div>
            <input
               className={this.props.clsName}
               type="number"
               value={this.props.insurance}
               placeholder={this.props.placeholder}
               onChange={(e) => { this.props.setInsurance(e.target.value); this.props.calcInsurancePayment() }}
            ></input>
         </div>
      );
   }

}

const mapStateToProps = (state) => {
   return {
      insurance: state.insurance,
      insurancePayment: state.insurancePayment
   };
}

export default connect(mapStateToProps,
   { setInsurance, calcInsurancePayment }
)(InputInsurance);