import React from 'react';
import { connect } from 'react-redux';
import { setCOD, setCODPayment } from '../../actions';
import '../../Styles.css';

class InputCOD extends React.Component {

   render() {
      return (
         <div className="insurance_container">
            <div className="text">{this.props.title}</div>
            <input
               className={this.props.clsName}
               type="number"
               value={this.props.COD}
               placeholder={this.props.placeholder}
               onChange={(e) => { this.props.setCOD(e.target.value); this.props.setCODPayment() }}
            ></input>
         </div>
      );
   }

}

const mapStateToProps = (state) => {
   return {
      COD: state.COD,
      CODPayment: state.CODPayment
   };
}

export default connect(mapStateToProps,
   { setCOD, setCODPayment }
)(InputCOD);