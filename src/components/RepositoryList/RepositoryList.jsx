import React from 'react';
import PropTypes from 'prop-types';
import Repository from '../Repository/Repository';

import './RepositoryList.css'

const RepositoryList = ({ repositories }) => (
    <div className="RepositoryList">
        {repositories.map(repository => <Repository key={repository.id} {...repository} />)}
    </div>
);

RepositoryList.propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string
    }))
};

RepositoryList.defaultProps = {
    repositories: []
};

export default RepositoryList;