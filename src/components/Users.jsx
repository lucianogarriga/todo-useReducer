import React from "react";
import PropTypes from "prop-types";
import UserData from "./UserData";

const Users = ({ usersList }) => {
  console.log(usersList);

  return (
    <div>
      <h3>Listado de Usuarios</h3>
      {usersList.length === 0 && <h4>No existen usuarios </h4>}
      {usersList.length > 0 && (
        <ul>
          {usersList.map((user) => <UserData key={user.id} user={user} /> )}
        </ul>)
      }
    </div>
  );
};

Users.propTypes = {
  usersList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      email: PropTypes.string,
    })
  ).isRequired,
};

export default Users;
