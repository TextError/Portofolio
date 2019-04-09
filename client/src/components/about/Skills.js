import React from 'react';

// Common
import Circle from '../common/Circle';

// Img
import Redux from '../../assets/Redux';
import MongoDB from '../../assets/MongoDB';
import NodeJs from '../../assets/NodeJs';
import PostgreSQL from '../../assets/PostgreSQL';
import ReactJs from '../../assets/ReactJs';
import JQuery from '../../assets/JQuery';
import Html from '../../assets/Html';
import Css from '../../assets/Css';
import Javascript from '../../assets/Javascript';

export default function Skills() {
  const rem = '3em';
  return (
    <div className='skills text-center'>
      <div className='row no-gutters'>
        <div className='col'>
          <p className='circle-animation'>Up to the present moment I have gained experience in the following:</p> 
          <div className='row no-gutters'>
            <div className='col-lg-5 offset-lg-2'>
              <div className='row no-gutters'>
                <div className='col-md-12'>
                  <div className='row no-gutters'>
                    <div className='col-sm-6'>
                      <div className='d-flex'>
                        <Circle svg={<Html width={rem} height={rem} />} text='Html 5' />
                        <Circle svg={<Css width={rem} height={rem} />} text='Css 3' />
                        <Circle svg={<Javascript width={rem} height={rem} />} text='Javascript' />
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <div className='d-flex'>
                        <Circle svg={<JQuery width={rem} height={rem} />} text='JQuery' />
                        <Circle svg={<ReactJs width={rem} height={rem} />} text='ReactJs' />
                        <Circle svg={<Redux width={rem} height={rem} />} text='Redux' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <div className='col'>
                <div className='row no-gutters'>
                  <div className='col-sm-6'>
                    <div className='d-flex'>
                      <Circle svg={<NodeJs height={rem} width='5.5em' />} text='NodeJs' />
                      <Circle svg={<MongoDB height={rem} width='5.5em' />} text='MongoDB' />
                      <Circle svg={<PostgreSQL height={rem} width={rem} />} text='PostgreSQL' />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='d-flex'>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}