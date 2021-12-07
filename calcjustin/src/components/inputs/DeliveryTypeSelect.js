import React from 'react';
import '../../Styles.css';

import { connect } from 'react-redux';
import { setType } from '../../actions';

class DeliveryTypeSelect extends React.Component {

   render() {
      return (
         <div className="send_container">
            <div className="text">Тип отправления</div>
            <select
               className="sendingType"
               onChange={(e) => this.props.setType(e.target.value)}
            >
               <option value="packadge" id="packadge" >посылка</option>
               <option value="load" id="load" >груз</option>
               <option value="pallet">палета</option>
            </select>
         </div>
      );
   };
}

const mapStateToProps = state => {
   return { type: state.type }
}

export default connect(mapStateToProps, { setType })(DeliveryTypeSelect);