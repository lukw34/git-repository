# React Introduction

### Specification

- Display list of 100 repositories from github
- Single repository should contain a description and name
- Owner of the repository should be displayed with avatar and login
- Display ...Loading when request is processing

### Mock

![Mock](Workshops/Mock.png?raw=true "Title")


### What we need

https://codesandbox.io/


###Rules

- No need to understand CSS (everything will be provided :D)
- We make is as simple as possible, without sophisticated syntax

### Let's go !

We go through 'Think in React' advise step by step.

[Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

#### Step 1: Break The UI Into A Component Hierarchy 

In that step we define and draw on the board hierarchy of the component

#### Step 2: Build A Static Version in React 

Now we move to codesandox and create couple of components.

Mock data for static version:

```json
[
  {
    "id": 1,
    "name": "mojombo/grit",
    "description": "**Grit is no longer maintained. Check out libgit2/rugged.** Grit gives you object oriented read/write access to Git repositories via Ruby.",
    "owner": {
      "avatar": "https://avatars0.githubusercontent.com/u/1?v=4",
      "login": "mojombo"
    }
  },
  {
    "id": 26,
    "name": "wycats/merb-core",
    "description": "Merb Core: All you need. None you don't.",
    "owner": {
      "avatar": "https://avatars0.githubusercontent.com/u/4?v=4",
      "login": "wycats"
    }
  }
]
```

**styles.css**
```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #92b1d0;
}
```

**Owner.css**

```css
.Owner {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: #23374D;
}

.OwnerImage {
  width: 75px;
  border-radius: 50%;
  flex: 0 0 80%;
  padding: 5px;
}

.OwnerLogin {
  text-transform: uppercase;
  color: white;
}

```

**Repository.css**

```css

.RepositoryContainer {
  display: flex;
  flex-direction: row;
  border: 2px solid #23374D;
  width: 75vw;
  margin:  20px;
}

.RepositoryInformation {
  flex: 0 0 75%;
  display: flex;
  flex-direction: column;
}

.RepositoryDescription {
  padding: 10px 20px;
  flex: 0 0 75%;
  border-top: 1px solid #23374D;
}

.RepositoryName {
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  flex: 0 0 25%;
  background: #d4cdcd;
  text-align: center;
}
```

**RepositoryList.css**

```css
.RepositoryList {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

#### Step 3: Identify The Minimal (but complete) Representation Of UI State 

    1. Is it passed in from a parent via props? If so, it probably isn’t state.
    2. Does it remain unchanged over time? If so, it probably isn’t state.
    3. Can you compute it based on any other state or props in your component? If so, it isn’t state.

### Step 4: Identify Where Your State Should Live

We need to fetch data from API and display it on the screen.
The best way in web to make HTTP request is to used [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

We need to think where is the best place to send a request ? Any suggestions ?

**fetch logic**

```javascript
  const fetchRepositories =  async() => {
    const response = await fetch('https://api.github.com/repositories');
    const data = await response.json();
    return data.map(({id, full_name: name, description, owner: { login, avatar_url: avatar }}) => ({
      id,
      name,
      description,
      owner: {
        avatar,
        login
      }
    }));
  };
```

### Step 5: Add Inverse Data Flow 

We don't need this