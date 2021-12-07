import React from 'react';
import '../../Styles.css';
import calc from '../../Vector.png';

import { connect } from 'react-redux';
import { setCalculatorModalVisibility } from '../../actions';



class CalcDropDown extends React.Component {

   render() {
      return (
         <div className="volume-calc">
            <img src={calc} alt="calc" className="calc-image"></img>
            <div
               className="calc-text"
               onClick={() => { this.props.setCalculatorModalVisibility() }}
            >
               Посчитать объем
            </div>
         </div>
      );
   };
}

const mapStateToProps = state => {
   return { volumeCalcVisibility: state.volumeCalcVisibility, }
}

export default connect(mapStateToProps, { setCalculatorModalVisibility })(CalcDropDown);