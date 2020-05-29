import React from 'react';
import ReactDOM from 'react-dom';

import tweets from 'tweets'

class Tweets extends React.Component {
    render() {
        console.log(this.props)
        const tweetElement = this.props.tweetprop.tweets.map(tweet => {
            console.log(tweet.text)
            return <p>This is a tweet {tweet.text} </p>

        })

        return(
            <div>
            {tweetElement}
            </div>
            );
    }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Tweets tweetprop = {tweets}/>
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//