import React from 'react';
import axios from 'axios';
import '../../Styles.css';

import { connect } from 'react-redux';
import { setCityFrom } from '../../actions';
import { setCityTo } from '../../actions';



class Cities extends React.Component {

   state = {
      citiesArr: []
   }

   componentDidMount() {
      axios.get('https://woldemarnow-jcalc.herokuapp.com/get-cities')
         .then((res) => {
            const arr = []
            for (let key in res.data) {
               arr.push(key)
            }
            this.setState({ citiesArr: arr })
         })
   }


   render() {
      const renderListFrom = this.state.citiesArr.map((city) => {
         return <option key={city}>
            {city}
         </option>
      })
      const renderListWhere = this.state.citiesArr.filter((city) => city !== this.props.cityFrom).map((city) => {
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
   return { cityFrom: state.cityFrom, cityTo: state.cityTo }
}

export default connect(mapStateToProps, { setCityFrom, setCityTo })(Cities);