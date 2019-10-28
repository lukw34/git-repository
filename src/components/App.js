import React, { useState, useEffect } from 'react';
import './App/App.css';
import RepositoryList from "./Repository List/RepositoryList";

function App() {
  const [isLoading, setLoading] =  useState(false);
  const [repositories, setRepositories] = useState([]);

  const fetchRepositories =  async() => {
    setLoading(true);
    const response = await fetch('https://api.github.com/repositories');
    const data = await response.json();
    setRepositories(data.map(({id, full_name: name, description, owner: { login, avatar_url: avatar }}) => ({
      id,
      name,
      description,
      owner: {
        avatar,
        login
      }
    })));
    setLoading(false)
  };

  useEffect(() => {
      fetchRepositories();
    }, []);

  return (
    <div className="App">
      {isLoading ? <div>...Loading</div> : <RepositoryList repositories={repositories} />}
    </div>
  );
}

export default App;
