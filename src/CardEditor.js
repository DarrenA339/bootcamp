import React from 'react';
import './CardEditor.css';
import { Link } from 'react-router-dom';

class CardEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { front: '', back: '' };
  }

  addCard = () => {
    const { front, back } = this.state;
  
    // Disallow empty or whitespace-only cards
    if (front.trim() === '' || back.trim() === '') {
      alert('Both front and back must have non-empty values.');
      return;
    }
  
    this.props.addCard(this.state);
    this.setState({ front: '', back: '' });
  };

  deleteCard = index => this.props.deleteCard(index);

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const cards = this.props.cards.map((card, index) => {
      return (
        <tr key={index}>
          <td>{card.front}</td>
          <td>{card.back}</td>
          <td>
            <button onClick={() => this.deleteCard(index)}>Delete card</button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Card Editor</h2>
        <table>
          <thead>
            <tr>
              <th>Front</th>
              <th>Back</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{cards}</tbody>
        </table>
        <br />
        <input
          name="front"
          onChange={this.handleChange}
          placeholder="Front of card"
          value={this.state.front}
        />
        <input
          name="back"
          onChange={this.handleChange}
          placeholder="Back of card"
          value={this.state.back}
        />
        <button onClick={this.addCard}>Add card</button>
        <hr />
        <Link to="/viewer">Go to card viewer</Link>
      </div>
    );
  }
}

export default CardEditor;