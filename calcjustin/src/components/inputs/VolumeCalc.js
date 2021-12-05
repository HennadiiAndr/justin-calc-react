import React from 'react';

import '../../Styles.css'

class VolumeCalc extends React.Component {
   state = {
      length: undefined,
      width: undefined,
      height: undefined,
      blurClick: "false"
   }

   getLengthInput = (event) => {
      this.setState({ length: event.target.value },
         () => { this.props.onLengthInput(this.state.length) }
      )
   }

   getWidthInput = (event) => {
      this.setState({ width: event.target.value },
         () => { this.props.onWidthInput(this.state.width) }
      )
   }

   getHeightInput = (event) => {
      this.setState({ height: event.target.value },
         () => { this.props.onHeightInput(this.state.height) }
      )
   }

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
                     onChange={this.getLengthInput}
                  ></input>
               </div>
               <div className="input_dimention-block">
                  <label htmlFor="input_width-field" className="dimention-input">ширина</label>
                  <input
                     className="input_width-field"
                     type="number"
                     placeholder="см"
                     onChange={this.getWidthInput}
                  ></input>
               </div>
               <div className="input_dimention-block">
                  <label htmlFor="input_height-field" className="dimention-input">высота</label>
                  <input
                     className="input_height-field"
                     type="number"
                     placeholder="см"
                     onChange={this.getHeightInput}
                  ></input>
               </div>
               <button
                  className="dimentions_submit"
                  onClick={this.props.volumeCalculate}
               >
                  Посчитать объем
               </button>
            </div>
         </div>
      )
   }
}
export default VolumeCalc