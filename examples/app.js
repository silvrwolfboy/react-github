import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GithubProfile } from '../';
import { GithubRepository } from '../';

class App extends Component {
  render() {
    return (
      <div>
        <GithubProfile username="mamal72" />
        <GithubRepository showDescription={false} username="mamal72" repository="react-github" />
        <GithubRepository username="mamal72" repository="react-github" />
        <GithubRepository showUsername={false} username="mamal72" repository="react-github" />
        <GithubRepository className="my-profile" username="mamal72" repository="react-github" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);
