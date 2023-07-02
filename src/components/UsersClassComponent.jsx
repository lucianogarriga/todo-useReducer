import React, { Component } from "react";
import UserData from "./UserData";

class UsersClassComponent extends Component {

  constructor() {
    super();
    this.state = {
      usersList: [],
      isLoading: true,
    };
  }
  
  componentDidMount() {
    (async () => {
      const API_URL = "https://reqres.in/api/users?per_page=12";
      const res = await fetch(API_URL).then((response) => response.json());
      const users = res.data;
      console.log(users);
      this.setState({ usersList: users, isLoading: false });
    })();
  }

  render() {
    const { usersList, isLoading } = this.state;

    return (
      <div>
        <h3>Listado de Usuarios</h3>
        {isLoading && <h4>Cargando... </h4>}

        {!isLoading && (
          <ul>
            {usersList.map((user) => (
              <UserData key={user.id} user={user} />
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default UsersClassComponent;
