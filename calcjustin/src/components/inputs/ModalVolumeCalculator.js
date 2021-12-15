import React from 'react';

import '../../Styles.css';

import { connect } from 'react-redux';
import {
   setLength,
   setWidth,
   setHeigth,
   calcVolume,
   calcWeightVolume,
   checkVolume,
   checkDimentions,
   calcAdressTakeSum,
   calcAdressDeliverySum,
   calcActualWeight
} from '../../actions';

class ModalVolumeCalculator extends React.Component {


   onClickhandler = (event) => {
      event.stopPropagation()
   }

   render() {
      return (
         <div
            className="volume-calcInput-container"
            style={{ display: this.props.visibility }}
            onClick={this.onClickhandler}
         >
            <div
               className="volume-fields_block">
               <div
                  className="input_dimention-block">
                  <label
                     htmlFor="input_length-field"
                     className="dimention-input"
                  >длина</label>
                  <input
                     className="input_length-field"
                     type="number"
                     placeholder="см"
                     value={this.props.length}
                     onChange={(e) => this.props.setLength(e.target.value)}
                  ></input>
               </div>
               <div className="input_dimention-block">
                  <label htmlFor="input_width-field" className="dimention-input">ширина</label>
                  <input
                     className="input_width-field"
                     type="number"
                     placeholder="см"
                     value={this.props.width}
                     onChange={(e) => this.props.setWidth(e.target.value)}
                  ></input>
               </div>
               <div className="input_dimention-block">
                  <label htmlFor="input_height-field" className="dimention-input">высота</label>
                  <input
                     className="input_height-field"
                     type="number"
                     placeholder="см"
                     value={this.props.height}
                     onChange={(e) => this.props.setHeigth(e.target.value)}
                  ></input>
               </div>
               <button
                  className="dimentions_submit"
                  onClick={() => {
                     this.props.calcVolume();
                     this.props.calcWeightVolume();
                     this.props.checkVolume();
                     this.props.checkDimentions();
                     this.props.calcAdressDeliverySum();
                     this.props.calcActualWeight();
                     this.props.calcAdressTakeSum();
                  }}
               >
                  Посчитать объем
               </button>
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      length: state.length,
      width: state.width,
      height: state.height,
      addressTakeSum: state.addressTakeSum,
      actualWeight: state.actualWeight,
      addressDeliverySum: state.addressDeliverySum
   }
}

export default connect(mapStateToProps, {
   setLength,
   setWidth,
   setHeigth,
   calcVolume,
   calcWeightVolume,
   checkVolume,
   checkDimentions,
   calcAdressTakeSum,
   calcAdressDeliverySum,
   calcActualWeight
}
)
   (ModalVolumeCalculator);