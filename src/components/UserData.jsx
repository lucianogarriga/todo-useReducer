import React from "react";
import PropTypes from 'prop-types';

const UserData = ({user}) => {
  return (
    <div>
      <li>
        <h3>{`${user.first_name} ${user.last_name}`}</h3>
        <img src={user.avatar} alt={user.first_name}/><br/>
        <a href={`mailto:${user.mail}`}>{user.email}</a>
      </li>
    </div>
  );
};

UserData.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
}

export default UserData;
