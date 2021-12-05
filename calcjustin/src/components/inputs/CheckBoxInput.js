import React from 'react';
import '../../Styles.css';

class CheckBoxInput extends React.Component {

   state = {
      isChecked: ''
   }

   isChecked = (event) => {
      this.setState({ isChecked: event.target.checked },
         () => { this.props.onCheckHandler(this.state.isChecked) }
      )
   }

   render() {
      return (
         <div className="input-deliveryType-containerMini">
            <div className="input-minicontainer">
               <input
                  type='checkbox'
                  className={this.props.clsName}
                  name="addressTake"
                  checked={this.state.isChecked}
                  onChange={this.isChecked}
               ></input>
               <label htmlFor="address-take">{this.props.title}</label>
            </div>
         </div>
      );
   };
}

export default CheckBoxInput;