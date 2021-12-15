import React from 'react';
import '../Styles.css';

import { connect } from 'react-redux';
import { setAlertText, closeAlert } from '../actions';

class Alert extends React.Component {
   render() {
      return (
         <div className="alert" style={{ display: this.props.alertText === "" ? "none" : "flex" }}>
            <div className="alert-header">
               <button className="closing-button" onClick={this.props.closeAlert}>X</button>
            </div>
            <div className="alert-text">{this.props.alertText}</div>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      alertText: state.alertText
   }
}
export default connect(mapStateToProps, { setAlertText, closeAlert })(Alert);