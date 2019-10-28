import React from 'react';
import PropTypes from 'prop-types';

import './Owner.css'

const Owner = ({ login, avatar}) => (
    <div className="Owner">
        <img className="OwnerImage" alt={login} src={avatar}/>
        <div className="OwnerLogin">{login}</div>
    </div>
);

Owner.propTypes = {
    login: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
};

export default Owner;