import React, { Component } from 'react';

const Joke = ({ joke: {setup, punchline} }) => (
  <p>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
  _isMounted = false;

  state = { joke: {}, jokes: [] };

  componentDidMount() {
    this._isMounted = true;
    
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(json => this.setState({ joke: json }))
      .catch(error => alert(error.message));
  }

  fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then(response => response.json())
      .then(json => this.setState({ jokes: json }))
      .catch(error => alert(error.message));
  }
  render() {
    const { setup, punchline } = this.state.joke;

    return (
      <div>
        <h2>Random Funny Joke</h2>
        <Joke joke={this.state.joke}/>
        <hr />
        <h3>Want More Jokes?</h3>
        <button onClick={this.fetchJokes}>CLick me!</button>
        {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
      </div>
    )
  }
}

export default Jokes;
