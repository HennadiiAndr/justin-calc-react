import React from 'react';
import '../../Styles.css';

import { connect } from 'react-redux';
import { setType } from '../../actions';

class DeliveryTypeSelect extends React.Component {

   render() {
      const typesArr = Object.keys(this.props.deliveryTypesList);
      const renderList = typesArr.map(type => {

         return <option
            selected={type === this.props.type}
            key={type}

         >
            {type}
         </option>
      });
      return (
         <div className="send_container">
            <div className="text">Тип отправления</div>
            <select
               className="sendingType"
               volume={this.props.type}
               onChange={(e) => this.props.setType(e.target.value)}
            >
               {renderList}
            </select>
         </div>
      );
   };
}

const mapStateToProps = state => {
   return {
      type: state.type,
      deliveryTypesList: state.deliveryTypesList
   }
}

export default connect(mapStateToProps, { setType })(DeliveryTypeSelect);