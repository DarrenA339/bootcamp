import React from 'react';
import './CardViewer.css';
import { Link } from 'react-router-dom';

class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      showFront: true,
    };
  }

  flipCard = () => {
    this.setState((prevState) => ({ showFront: !prevState.showFront }));
  };

  nextCard = () => {
    if (this.state.currentIndex < this.props.cards.length - 1) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex + 1,
        showFront: true, // Reset to front side when moving to a new card
      }));
    }
  };

  prevCard = () => {
    if (this.state.currentIndex > 0) {
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex - 1,
        showFront: true, // Reset to front side when moving to a new card
      }));
    }
  };

  render() {
    const { currentIndex, showFront } = this.state;
    const { cards } = this.props;

    if (cards.length === 0) {
      return (
        <div className="card-viewer">
          <h2>Card Viewer</h2>
          <p>No cards to display. Please add some cards in the editor.</p>
          <Link to="/editor">Go to card editor</Link>
        </div>
      );
    }

    const currentCard = cards[currentIndex];

    return (
      <div className="card-viewer">
        <h2>Card Viewer</h2>
        <div className="card" onClick={this.flipCard}>
          {showFront ? currentCard.front : currentCard.back}
        </div>
        <div className="controls">
          <button
            className="nav-button"
            onClick={this.prevCard}
            disabled={currentIndex === 0}
          >
            Previous Card
          </button>
          <button
            className="nav-button"
            onClick={this.nextCard}
            disabled={currentIndex === cards.length - 1}
          >
            Next Card
          </button>
        </div>
        <p className="progress">
          Card {currentIndex + 1}/{cards.length}
        </p>
        <Link to="/editor">Go to card editor</Link>
      </div>
    );
  }
}

export default CardViewer;
