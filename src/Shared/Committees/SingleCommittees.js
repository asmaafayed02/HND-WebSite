import React, { Component } from "react";
import './Committee.css'

class AllCommittee extends Component {
  
  render() {
        const { cards } = this.props;
        const allCardsDes = cards.map(cardsInfo => {
          return (
            <div key={cardsInfo.id} 
                className="col-lg-3 col-md-4 col-sm-6 col-12 Committee-parent">
                
                   <div className="Committee-icon">
                      <i className={cardsInfo.icon}></i> 
                   </div>

                    <div className="Committee-information">
                      <h3 className='committee-name'>{cardsInfo.name}</h3>  
                      <p className="describtion">{cardsInfo.des}</p>
                    </div>

                </div>
          )
        }
        )                    
            
        return <div>{allCardsDes}</div>;
      }
    
}

export default AllCommittee;
