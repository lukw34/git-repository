import React from 'react';
import RepositoryList from "../RepositoryList/RepositoryList";
import fetchGitRepositories from "../../api/fetchGitRepositories";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            repositories: [],
            error: null
        }
    }

    fetchRepositories = async () => {
        this.setState({
            isLoading: true
        });

        try {
            const repositories = await fetchGitRepositories();
            this.setState({
                isLoading: false,
                repositories,
                error: null
            })
        } catch (e) {
            this.setState({
                error: 'Data fetching error',
                isLoading: false
            })
        }

    };

    componentDidMount() {
        this.fetchRepositories();
    }

    render() {
        const {isLoading, repositories, error} = this.state;
        return error ? (<div>{error}</div>) : (
            <div>
                {isLoading ? <div>...Loading</div> : <RepositoryList repositories={repositories}/>}
            </div>
        )
    }
}

export default App;
