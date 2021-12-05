import React from 'react';
import '../../Styles.css';
import calc from '../../Vector.png';


class CalcDropDown extends React.Component {
   state = {
      volumeCalcVisibility: undefined
   }

   onVolumeCalcClick = () => {
      this.setState({ volumeCalcVisibility: "flex" },
         () => { this.props.dropDownInit(this.state.volumeCalcVisibility) }
      )
   }

   render() {
      return (
         <div className="volume-calc">
            <img src={calc} alt="calc" className="calc-image"></img>
            <div
               className="calc-text"
               onClick={this.onVolumeCalcClick}
            >
               Посчитать объем
            </div>
         </div>
      );
   };
}

export default CalcDropDown