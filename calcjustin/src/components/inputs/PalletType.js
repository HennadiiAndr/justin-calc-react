import React from "react";
import '../../Styles.css';

import { connect } from 'react-redux';
import { setPalletType } from '../../actions';

class PalletType extends React.Component {

   render() {
      return (
         <div className="palletType-container" style={{ display: this.props.visibility }}>
            <div className="palletType-minicontainer">
               <input
                  type="radio"
                  className="tiny-pallet"
                  name="pallet"
                  checked={this.props.palletType === "0.48"}
                  onChange={(e) => this.props.setPalletType(e.target.value)}
                  value="0.48"></input>
               <label htmlFor="tiny-pallet">0.48 м</label>
            </div>
            <div className="palletType-minicontainer">
               <input
                  type="radio"
                  className="middle-pallet"
                  name="pallet"
                  checked={this.props.palletType === "0.96"}
                  onChange={(e) => this.props.setPalletType(e.target.value)}
                  value="0.96"></input>
               <label htmlFor="middle-pallet">0.96 м</label>
            </div>
            <div className="palletType-minicontainer">
               <input
                  type="radio"
                  className="large-pallet"
                  name="pallet"
                  checked={this.props.palletType === "2"}
                  onChange={(e) => this.props.setPalletType(e.target.value)}
                  value="2"></input>
               <label htmlFor="large-pallet">2 м</label>
            </div>
         </div>
      );
   };
}

const mapStateToProps = state => {
   return { palletType: state.palletType }
}

export default connect(mapStateToProps, { setPalletType })(PalletType);