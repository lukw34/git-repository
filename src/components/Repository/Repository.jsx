import React from 'react';
import PropTypes from 'prop-types';
import Owner from "../Owner/Owner";

import './Repository.css';

const Repository = ({ name, description, owner}) => (
    <div className="RepositoryContainer">
        <Owner {...owner} />
        <div className="RepositoryInformation">
            <div className="RepositoryName">
                {name}
            </div>
            <div className="RepositoryDescription">
                {description}
            </div>
        </div>
    </div>
);

Repository.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    owner: PropTypes.shape({})
};

Repository.defaultProps = {
    owner: {}
};

export default Repository;