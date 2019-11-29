import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export class Member extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string
  };

  state = {
    imageError: false
  };

  onError = () => {
    this.setState({ imageError: true });
  };

  render() {
    const { id, name, age, image } = this.props;

    return (
      <li key={id} className="members__item">
        <Link to={`/members/${id}`}>
            
            {
              this.state.imageError 
              ? <span className="img__placeholder">{name.charAt(0)}</span>
              : <figure><img src={image} alt={name} onError={this.onError} /></figure>
            }
          
          <div className="members__item__body">
            <h2 className="members__item__title">
              {typeof name === "string" ? name : "Unknown name"}
            </h2>
            <h4 className="members__item__subtitle">
              {typeof age === "number" ? `${age} years old` : "Unknown age"}
            </h4>
          </div>
          <div className="members__item__actions">
            <span>+</span>
          </div>
        </Link>
      </li>
    );
  }
}
