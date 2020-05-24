import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const FaBars = ( props ) => <FontAwesomeIcon icon={faBars} {...props} />
const FaTimes = ( props ) => <FontAwesomeIcon icon={faTimes} {...props} />

export {
    FaBars,
    FaTimes
}