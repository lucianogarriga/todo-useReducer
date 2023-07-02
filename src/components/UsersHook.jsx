import React, { useState, useEffect, useRef } from "react";
import UserData from "./UserData";

const UsersHook = () => {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const title = useRef(null);

  useEffect(() => {
    (async () => {
      const API_URL = "https://reqres.in/api/users?per_page=12";
      const res = await fetch(API_URL).then((response) => response.json());
      const users = res.data;
      setTimeout(() => {
        setUsersList(users);
        setIsLoading(false);
      }, 1000);
    })();
    title.current.innerHTML = "Usuarios obtenidos por API";
    // title.current.style.color = "tomato";
  }, []);

  const changeTitle = () => {
    title.current.classList.add('title-changed') 
  }

  return (
    <>
      <h3 ref={title}>Listado de Usuarios</h3>
      <button onClick={changeTitle}>Cambiar el title</button>
      {isLoading && <h4>Cargando... </h4>}

      {!isLoading && (
        <ul>
          {usersList.map((user) => (
            <UserData key={user.id} user={user} />
          ))}
        </ul>
      )}
    </>
  );
};

export default UsersHook;
