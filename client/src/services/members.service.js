import axios from "axios";

export default class MembersService {
  constructor() {
    this.service = axios.create({
      baseURL: `http://localhost:${process.env.REACT_APP_SERVER_PORT}`
    });
  }

  geMembers = async (page = 1) => {
    const members = await this.service.get(`/members?page=${page}`);
    return members.data;
  };

  geMember = async memberId => {
    const member = await this.service.get(`/members/${memberId}`);
    return member.data;
  };
}
