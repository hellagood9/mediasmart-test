import React, { Component } from "react";
import MembersService from "../services/members.service";

import { MembersList } from "../components/MembersList";

import { Title } from "../elements/Title";

import { css } from "@emotion/core";
import BarLoader from "react-spinners/BarLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

export class Home extends Component {
  constructor() {
    super();
    this.service = new MembersService();
  }

  state = {
    members: [],
    loading: true,
    currentPage: 1,
  };

  render() {
    const { members } = this.state;
    return (
      <>
        <Title>Our Staff Members</Title>
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
          <MembersList members={members} />
        )}
      </>
    );
  }

  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  async componentDidMount() {
    const results = await this.service.geMembers(1);
    this.setState({ members: results, loading: false });
    document.addEventListener("scroll", this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  trackScrolling = async () => {
    const wrappedElement = document.querySelector("body");

    if (this.isBottom(wrappedElement)) {
      const nextPage = this.state.currentPage + 1;
      const newFoundMembers = await this.service.geMembers(nextPage);

      const members = [...this.state.members, ...newFoundMembers];

      this.setState({
        members,
        loading: false,
        currentPage: nextPage
      });
    }
  };
}
