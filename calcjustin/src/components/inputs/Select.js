import React from 'react';
import '../../Styles.css';

class Select extends React.Component {
   state = {
      selectedItem: "packadge"
   }

   onTypeSelect = event => {
      this.setState({ selectedItem: event.target.value },
         () => { this.props.onSelectItemHandler(this.state.selectedItem) })
   }

   render() {
      return (
         <div className="send_container">
            <div className="text">Тип отправления</div>
            <select
               className="sendingType"
               onChange={this.onTypeSelect}
            >
               <option value="packadge" id="packadge" >посылка</option>
               <option value="load" id="load" >груз</option>
               <option value="pallet">палета</option>
            </select>
         </div>
      );
   };
}

export default Select