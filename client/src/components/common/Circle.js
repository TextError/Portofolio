import React from 'react';
import PropTypes from 'prop-types';

// Css
import '../../css/skill.css';


const Circle = ({
  icon,
  text,
  svg,
}) => {
  return (
    <div className='m-auto'>
      <div className='circle'>
        <div className='outer-circle' >
          <div className='inner-circle' >
            <span className=''>
              <i className={icon ? icon : null}>{svg ? svg : null}</i>
            </span>
          </div>
        </div>
      </div>
      <p>{text}</p>
    </div>
  );
};

Circle.defaultProps = {
  text: 'text'
};

export default Circle;