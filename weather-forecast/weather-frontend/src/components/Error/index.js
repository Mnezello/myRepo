import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import '../../styles/css/index.css';

library.add(faExclamationCircle);

const Error = (props) => {
    return (
        <div className="error">
            <FontAwesomeIcon icon="exclamation-circle" size="2x" />
            {props.error}
        </div>
    );
}

export default Error;