import React, { Component } from 'react';
import classnames from 'classnames';
import { withRouter } from "react-router-dom";

// Animation
import WOW from "wow.js";

// Css
import '../../css/landing.css';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      cicle: false,
      hide: false,
    }
  };

  componentDidMount() {
    // Init the WOW
    const wow = new WOW();
    wow.init();
    // Start interval
    this.interval = setInterval(() => this.setState({ number: this.state.number + 1 }), 10);
  };

  componentDidUpdate() {
    const { number, cicle } = this.state;
    // Clear interval when reach 100
    if (number === 100) {
      clearInterval(this.interval);
    };
    // Start animation
    if ((number === 100) && (cicle === false)) {
      this.setState({ cicle: true })
    };
    // Hide loading after finish
    if (cicle) {
      setInterval(() => this.setState({ hide: true }), 2001);
    };
    // Redirect on home when cicle i complete
    // if (number === 100) {
    //     setInterval(() => this.props.history.push('/home'), 2000);
    //   }
    };
    
    render() {
      const { number, cicle, hide } = this.state;
      const loading = (
        <h1 className={classnames('m-auto', {'fadeUp':cicle, 'hide': hide})}><span>{number} %</span></h1>
      );
      const message = (
        <h5 className='m-auto'>With a passion for learning</h5>
      );
    return (
      <div className='landing'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col'>
              <div className='landing-loading d-flex'>
                <div className='m-auto'>
                  {loading}
                  <div className='landing-text-background rollUp'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default withRouter(Landing)