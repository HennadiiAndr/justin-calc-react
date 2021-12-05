import React from 'react';
import axios from 'axios';
import '../../Styles.css';


class Cities extends React.Component {

   state = {
      citiesArr: [],
      selectedCityFrom: '',
      selectedCityWhere: ''
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

   onSelectFrom = (event) => {
      this.setState({ selectedCityFrom: event.target.value })
   }

   onSelectWhere = (event) => {
      this.setState({ selectedCityWhere: event.target.value })
   }


   render() {
      const renderListFrom = this.state.citiesArr.map((city) => {
         return <option key={city}>
            {city}
         </option>
      })
      const renderListWhere = this.state.citiesArr.filter((city) => city !== this.state.selectedCityFrom).map((city) => {
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
                  onChange={this.onSelectFrom}
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
                  onChange={this.onSelectWhere}
               >
                  <option value="выберите куда" disabled ></option>
                  {renderListWhere}
               </select>
            </div>
         </div >
      )
   }
}

export default Cities