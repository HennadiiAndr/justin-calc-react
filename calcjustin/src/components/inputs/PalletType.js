import React from "react";
import '../../Styles.css';

class PalletType extends React.Component {
   state = {
      selectedOption: ""
   }

   onChangeValue = event => {
      this.setState({ selectedOption: event.target.value },
         () => { this.props.onPalletTypeCheck(this.state.selectedOption) }
      )
   }
   render() {
      return (
         <div className="palletType-container" style={{ display: this.props.visibility }}>
            <div className="palletType-minicontainer">
               <input
                  type="radio"
                  className="tiny-pallet"
                  name="pallet"
                  checked={this.state.selectedOption === "0.48"}
                  onChange={this.onChangeValue}
                  value="0.48"></input>
               <label htmlFor="tiny-pallet">0.48 м</label>
            </div>
            <div className="palletType-minicontainer">
               <input
                  type="radio"
                  className="middle-pallet"
                  name="pallet"
                  checked={this.state.selectedOption === "0.96"}
                  onChange={this.onChangeValue}
                  value="0.96"></input>
               <label htmlFor="middle-pallet">0.96 м</label>
            </div>
            <div className="palletType-minicontainer">
               <input
                  type="radio"
                  className="large-pallet"
                  name="pallet"
                  checked={this.state.selectedOption === "2"}
                  onChange={this.onChangeValue}
                  value="2"></input>
               <label htmlFor="large-pallet">2 м</label>
            </div>
         </div>
      );
   };
}

export default PalletType