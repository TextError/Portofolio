import React, { Component } from 'react';

// Animation
import WOW from "wow.js";

// Components
import Title from './Title';
import AboutMe from './AboutMe';
import Skills from './Skills';
import MoreSkills from './MoreSkills';

// Css
import '../../css/about.css';


export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }

  componentDidMount() {
    this.setState({ active: true });
    const wow = new WOW();
    wow.init();
  };

  componentDidUpdate(prevProps, prevState) {
    const { active } = this.state;
    if ((active !== prevState.active) && (this.state.active === true)) {
      const timer = () => {setTimeout(() => this.setState({ active: false }), 620)}
      timer();
    }
  };

  render() {
    const { active } = this.state;
    const slideRight = 'wow bounceInRight';
    const slideLeft = 'wow bounceInLeft';
    return (
      <div className='about' id='about'>
        <div className='container-fluid p-0'>
          <div className='row no-gutters'>
            <div className='col'>
              <Title active={active} />
            </div>
          </div>
          <div className='container p-0'>
            <div className='row no-gutters'>
              <div className='col'>
                <AboutMe
                  slideLeft={slideLeft}
                  slideRight={slideRight}
                />
              </div>
            </div>
          </div>
          <div className='container-fluid p-0'>
            <div className='row no-gutters'>
              <div className='col'>
                <Skills />
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row no-gutters'>
              <div className='col'>
                <MoreSkills />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
