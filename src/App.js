import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';

class App extends Component {
  constructor() {
    super();
    this.state = { displayBio: false };
  }

  toogleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <img src={profile} alt='profile' className="profile"/>
        <h1>Hello!</h1>
        <p>My name is Ngoc Anh. I am a software engineer.</p>
        <p>I'm alway looking forward to work on meaningfull projects.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Thai Binh, Viet Nam.</p>
              <p>My favorite language is Python but JavaScript is awesome too.</p>
              <p>Besides coding, I also love music and noodles.</p>
              <button onClick={this.toogleDisplayBio}>Show less</button>
            </div>
          ) : (
            <button onClick={this.toogleDisplayBio}>Read More</button>
          ) 
        }
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}

export default App;
