import React, { Component } from "react";
import './BreifCommit.css'

class BreifCommit extends Component {
  
  render() {
    return (
      <div className="breif-commit container">
          <h2 className='commit-header'>our committees</h2> 
          <div className='row'>
              {/******* Start First Commit *********/}
                <div className='commit-card first-commit col-md-3 col-sm-6 col-12'>
                    <i className='fa fa-laptop fa-2x'></i>
                    <h3>Developers</h3>
                    <p>Intersting in technology</p>
                </div>
                {/******* End First Commit *********/}

                {/******* Start Second Commit *********/}
                <div className='commit-card second-commit col-md-3 col-sm-6 col-12'>
                    <i className='fa fa-camera fa-2x'></i>
                    <h3>Media</h3>
                    <p>Intersting in media coverage</p>
                </div>
                {/******* End Second Commit *********/}

                {/******* Start Third Commit *********/}
                <div className='commit-card third-commit col-md-3 col-sm-6 col-12'>
                    <i className='fa fa-desktop fa-2x'></i>
                    <h3>Techoons</h3>
                    <p>Intersting in technology</p>
                </div>
                {/******* End Third Commit *********/}

                {/******* Start fourth Commit *********/}
                <div className='commit-card fourth-commit col-md-3 col-sm-6 col-12'>
                    <i className='fa fa-money fa-2x'></i>
                    <h3>FR</h3>
                    <p>Intersting in Money</p>
                </div>
                {/******* End fourth Commit *********/}
                
                {/******* Start fifth Commit *********/}
                <div className='commit-card fifth-commit col-md-3 col-sm-6 col-12'>
                    <i className='fa fa-chain-broken fa-2x'></i>
                    <h3>Logistic</h3>
                    <p>Intersting in Hand-made giveawaies</p>
                </div>
                {/******* End fifth Commit *********/}

                {/******* Start sixth Commit *********/}
                <div className='commit-card sixth-commit col-md-3 col-sm-6 col-12'>
                    <i className='fa fa-smile-o fa-2x'></i>
                    <h3>HR</h3>
                    <p>Intersting in making sheets for evelaute</p>
                </div>
                {/******* End sixth Commit *********/}

                {/******* Start seven Commit *********/}
                <div className='commit-card seven-commit col-md-3 col-sm-6 col-12'>
                    <i className='fa fa-users fa-2x'></i>
                    <h3>PR</h3>
                    <p>Intersting in making relations</p>
                </div>
                {/******* End seven Commit *********/}

                {/******* Start Eight Commit *********/}
                <div className='commit-card eight-commit col-md-3 col-sm-6 col-12'>
                    <i className='fa fa-shopping-bag fa-2x'></i>
                    <h3>Digital Marketing</h3>
                    <p>Intersting in planning, managing marketing campaigns</p>
                </div>
                {/******* End Eight Commit *********/}
          </div>

          {/******* Start Link for learn more ******/}
          <div className='commit-link'>
            <a href='../../About/AllCommitee.js' target="_blank">learn more about our Committee</a>
          </div>
          {/******* End Link for learn more ******/}
      </div>
    );
  }
}

export default BreifCommit;
