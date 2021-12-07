import React from 'react';
import { connect } from 'react-redux';
import { setInsurance } from '../../actions';
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
               onChange={(e) => this.props.setInsurance(e.target.value)}
            ></input>
         </div>
      );
   }

}

const mapStateToProps = (state) => {
   return { insurance: state.insurance };
}

export default connect(mapStateToProps,
   { setInsurance }
)(InputInsurance);