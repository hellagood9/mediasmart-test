import React, { Component } from "react";

import MembersService from "../services/members.service";

import { ButtonBackToHome } from "../elements/ButtonBackToHome";
import { Title } from "../elements/Title";

import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

export class MemberDetails extends Component {
  constructor(props) {
    super(props);
    this.service = new MembersService();
  }

  state = {
    member: {},
    imageError: false,
    loading: true
  };

  onError = () => {
    this.setState({ imageError: true });
  };

  render() {
    const { name, age, image, bio } = this.state.member;

    return (
      <>
        <ButtonBackToHome>Back to Home page</ButtonBackToHome>
        <Title>Staff Member Profile</Title>

        <BarLoader
          css={override}
          sizeUnit={"px"}
          size={40}
          color={"#FF324B"}
          loading={this.state.loading}
        />
        {this.state.loading ? (
          <h4>Loading, please wait</h4>
        ) : (
          <div className="member-detail">
            <div className="member-detail__body">

              <div className="member-detail__info">
                <h2 className="member-detail__name">{name}</h2>
                <h4 className="member-detail__age">{age} years old</h4>
              </div>

              {this.state.imageError ? (
                <span className="img__placeholder--detail">{name.charAt(0)}</span>
              ) : (
                <figure>
                  <img src={image} alt={name} onError={this.onError} />
                </figure>
              )}
            </div>

            <section className="member-detail__bio">
              <h2 className="member-detail__title">About me</h2>
              <p>{bio}</p>
            </section>
          </div>
        )}
      </>
    );
  }

  async componentDidMount() {
    const {
      match: { params }
    } = this.props;

    const member = await this.service.geMember(`${params.memberId}`);
    this.setState({ member, loading: false });
  }
}
