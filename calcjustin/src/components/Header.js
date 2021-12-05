import React from 'react';
import '../Styles.css';

class Header extends React.Component {
   render() {
      return (
         <div>
            <div className="title-block_container">
               <div className="title-block">
                  <div className="title-block_firstTitle">
                     стоимость доставки
                  </div>
                  <div className="title-block_secondTitle">
                     РАССЧИТЫВАЙ
                  </div>
                  <div className="title-block_thirthTitle">
                     на нас
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Header