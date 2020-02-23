import React, { Component } from "react";
import { choice } from "../helper";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currentCoin: null,
      numFlips: 0,
      numHeads: 0,
      numTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.coins);
    this.setState(curState => {
      return {
        currentCoin: newCoin,
        numFlips: curState.numFlips + 1
      };
    });
  }

  handleClick(event) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinContainer">
        <h2>Heads or Tails?</h2>
        <button onClick={this.handleClick}>Flip The Coin</button>
        <p>
          Out of {this.state.numFlips}, there have been {this.state.numHeads}{" "}
          heads and {this.state.numTails} tails
        </p>
      </div>
    );
  }
}

export default CoinContainer;
