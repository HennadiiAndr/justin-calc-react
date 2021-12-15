import React from 'react';
import '../../Styles.css';

import { connect } from 'react-redux';
import {
   setCityFrom,
   setCityTo,
   setZone
} from '../../actions';



class Cities extends React.Component {

   componentDidUpdate() {
      this.props.setZone();
   }

   render() {
      const citiesArr = Object.keys(this.props.citiesObject)
      const renderListFrom = citiesArr.map((city) => {
         return <option key={city}>
            {city}
         </option>
      })
      const renderListWhere = citiesArr.filter((city) => city !== this.props.cityFrom).map((city) => {
         return <option key={city}>
            {city}
         </option>
      })
      return (
         <div className="sendDeliveryCity_block" style={{ display: this.props.visibility }}>
            <div className="city-display">
               Откуда
               <select
                  className="sendCity"
                  defaultValue="выберите откуда"
                  onChange={(e) => this.props.setCityFrom(e.target.value)}
               >
                  <option value="выберите откуда" disabled></option>
                  {renderListFrom}
               </select>
            </div>
            <div className="city-display">
               Куда
               <select
                  className="deliveryCity"
                  defaultValue="выберите куда"
                  onChange={(e) => this.props.setCityTo(e.target.value)}
               >
                  <option value="выберите куда" disabled ></option>
                  {renderListWhere}
               </select>
            </div>
         </div >
      )
   }
}

const mapStateToProps = state => {
   return {
      cityFrom: state.cityFrom,
      cityTo: state.cityTo,
      citiesObject: state.citiesObject
   }
}

export default connect(mapStateToProps, { setCityFrom, setCityTo, setZone })(Cities);