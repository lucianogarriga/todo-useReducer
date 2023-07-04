import React from 'react';
import PropTypes from 'prop-types'

// Default prop w/ destructuring
const Gretting = ({text = 'Default destructuring'}) => {
    return (
        <div>
           <h2 style={{textAlign:'center'}}> {text}</h2>
        </div>
    );
}

// Tipado de Props
Gretting.propTypes = {
    text: PropTypes.string
}

// DefaultProps
Gretting.defaultProps = {
    text: 'Valor default de props'
}

export default Gretting;
