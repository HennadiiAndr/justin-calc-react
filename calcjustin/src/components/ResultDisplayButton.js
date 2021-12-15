import React from 'react';
import '../Styles.css';

import { connect } from 'react-redux';
import { setResultBlockVisibility } from '../actions';

class ResultDisplayButton extends React.Component {
   render() {
      return (
         <div className="resultBtn-container">
            <button
               className="resultbtn"
               onClick={() => { this.props.setResultBlockVisibility() }}
            >
               УЗНАТЬ ЦЕНУ</button>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      resultBlockVisibility: state.resultBlockVisibility
   }
}

export default connect(mapStateToProps, { setResultBlockVisibility })(ResultDisplayButton);