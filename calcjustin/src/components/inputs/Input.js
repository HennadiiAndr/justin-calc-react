import React from 'react';
import '../../Styles.css';

class Input extends React.Component {
   state = {
      inputNumber: ''
   }
   onInput = event => {
      this.setState({ inputNumber: event.target.value },
         () => { this.props.onInputHandler(this.state.inputNumber) })
   }

   render() {
      return (
         <div className="insurance_container">
            <div className="text">{this.props.title}</div>
            <input
               className={this.props.clsName}
               type="number"
               placeholder={this.props.placeholder}
               value={this.state.inputNumber}
               onChange={this.onInput}
            ></input>
         </div>
      );
   }

}

export default Input;