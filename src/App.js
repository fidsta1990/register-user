import React, { useState } from "react";
import Modal from "./components/Modal/Modal";
import User from "./components/User/User";
import UserList from "./components/UserList/UserList";

function App() {
  const [userDetails, setUserDetails] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  let userLength = userDetails.length > 0;

  const addUser = (newUser) => {
    setUserDetails((prevState) => {
      return [{ id: Math.random().toString(), ...newUser }, ...prevState];
    });
  };

  const modalOpen = () => {
    setOpenModal(true);
  };
  const modalClose = () => {
    setOpenModal(false);
  };

  return (
    <div onClick={modalClose}>
      {openModal && <Modal modalClose={modalClose} openModal={openModal} />}
      <User addUser={addUser} modalOpen={modalOpen} />
      {userLength && <UserList addNewUser={userDetails} />}
    </div>
  );
}

export default App;
