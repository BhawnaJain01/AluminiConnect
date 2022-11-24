import React, { useEffect, useState } from "react";

const MyContext = React.createContext([{}, () => {}]);

function UserContext(props) {
  async function loadUserData(token) {
    let data = await fetch("http://localhost:3045/api/getUserByToken", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: ` Bearer ${token}`,
      },
    });

    let finalData = await data.json();
    console.log("useContext", finalData);
    SetUserData(finalData);
  }
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      loadUserData(token);
    }
  }, []);

  const [user, SetUser] = useState({ data: null });

  const SetUserData = (data) => {
    SetUser({ data: data });
  };
  return (
    <MyContext.Provider value={[user, SetUserData]}>
      {props.children}
    </MyContext.Provider>
  );
}

export { UserContext, MyContext };
