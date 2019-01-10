import React from 'react';
import '../../App.css';

class Lines extends React.Component {

    render() {
        return(
            <div>
                <svg style={{left: '40%'}} height="25" width="150">
                    <line className='lineStyle' x1="0" y1="0" x2="200" y2="200" stroke="url(#grad2)" strokeWidth="5" />
                </svg>

                <svg style={{left: '60%'}} height="25" width="150">
                    <line className='lineStyle2' x1="0" y1="0" x2="200" y2="200" stroke="url(#grad2)" strokeWidth="5"  />
                </svg>

            </div>

        );
    }
}
export default Lines
