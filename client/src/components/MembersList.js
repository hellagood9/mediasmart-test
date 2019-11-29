import React, { Component } from "react";
import PropTypes from "prop-types";

import { Member } from "./Member";

export class MembersList extends Component {
  static propTypes = {
    members: PropTypes.array
  };

  _sortByName = () => {
    const sortedByName = this.props.members;
    sortedByName.sort((a, b) => (a.name > b.name ? 1 : -1));

    this.setState({
      members: sortedByName
    });
  };

  _sortByAge = () => {
    const sortedByAge = this.props.members;
    sortedByAge.sort((a, b) => (a.age > b.age ? -1 : 1));

    this.setState({
      members: sortedByAge
    });
  };

  render() {
    const { members } = this.props;

    return (
      <>
        <div className="filters">
          <button onClick={this._sortByName}>Sort By Name</button>
          <button onClick={this._sortByAge}>Sort By Age</button>
        </div>

        {members.length === 0 ? (
          <h3>Sorry, no members available</h3>
        ) : (
          <ul className="members">
            {members.map((member, idx) => (
              <Member
                key={idx}
                id={member.id}
                name={member.name}
                age={member.age}
                image={member.image}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}
