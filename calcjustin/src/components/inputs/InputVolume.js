import React from 'react';
import { connect } from 'react-redux';
import { setVolume } from '../../actions';
import '../../Styles.css';

class InputVolume extends React.Component {

   render() {
      return (
         <div className="insurance_container">
            <div className="text">{this.props.title}</div>
            <input
               className={this.props.clsName}
               type="number"
               value={this.props.volume}
               placeholder={this.props.placeholder}
               onChange={(e) => this.props.setVolume(e.target.value)}
            ></input>
         </div>
      );
   }

}

const mapStateToProps = (state) => {
   return { volume: state.volume };
}

export default connect(mapStateToProps,
   { setVolume }
)(InputVolume);