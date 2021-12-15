import React from "react";
import '../Styles.css';
import { connect } from 'react-redux';

class ResultDisplay extends React.Component {
   render() {
      return (
         <div className="result_block" style={{ display: this.props.resultBlockVisibility === true ? "flex" : '' }}>
            <div className="result_block-container">
               <div className="result_titles">
                  <div className="rate-block">
                     <div className="rate-text">Тариф:</div>
                     <div className="rate"></div>
                  </div>
                  <div className="addressTakeDisplay-block">
                     <div className="addressTakeDisplay-text">Адресный забор:</div>
                     <div className="addressTakeDisplay"></div>
                  </div>
                  <div className="addressDeliveryDisplay-block">
                     <div className="addressDeliveryDisplay-text">Адресная доставка:</div>
                     <div className="addressDeliveryDisplay"></div>
                  </div>
                  <div className="insurancePay-block">
                     <div className="insurancePay-text">Страховой платеж:</div>
                     <div className="insurancePay">{this.props.insurancePayment}</div>
                  </div>
                  <div className="CODpay-block">
                     <div className="CODpay-text">Комиссия за наложенный платеж:</div>
                     <div className="CODpay">{this.props.CODPayment}</div>
                  </div>
               </div>
               <div className="result_display_block">
                  <div className="result-display-title">Итоговая стоимость</div>
                  <div className="result-display-field">
                     <div className="result-display"></div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
};

const mapStateToProps = state => {
   return {
      insurancePayment: state.insurancePayment,
      CODPayment: state.CODPayment,
      resultBlockVisibility: state.resultBlockVisibility
   }
}

export default connect(mapStateToProps)(ResultDisplay);