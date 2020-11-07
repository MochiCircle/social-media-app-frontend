import React, { SyntheticEvent, useState } from "react";
import { Form, Input } from "reactstrap";
import axios from 'axios';
import '../settings.css';

export const PasswordForm: React.FC = () => {

  const [modal, setModal] = useState(false);

  
  const updatePassword = async (event: SyntheticEvent<HTMLFormElement>) => {
  
      event.preventDefault();
      const fName = event.currentTarget["firstName"].value;
      const lName = event.currentTarget["lastName"].value;
      const eMail = event.currentTarget["email"].value;
      const password = event.currentTarget["password"].value;
      const current = event.currentTarget["confirm"].value;
  
      if (password != current)
      {
        alert("Passwords do not match.")
      }
      else
      {
  
        const obj = 
  
        //console.log(newUser);
        //let newUserData = JSON.stringify(newUser);
        //newUserData
        //console.log("after: " + newUser);
  
        axios.post("http://localhost:3004/user", {
            id: null,
            firstName: fName,
            lastName: lName,
            email: eMail,
            password: password
            
        })
      }
    }

  return (
    <div>
      <h3>Password</h3>
      <Form onSubmit={updatePassword} className="settingsBox" method="POST">
        <div className="whiteText" >Current Password</div>
        <Input type='password' name='currentPass' required placeholder='current password' />
        <br/>
        <div className="whiteText" >New Password</div>
        <Input type='password' name='newPass' required placeholder='new password' />
        <br/>
        <div className="whiteText" >Confirm New Password</div>
        <Input type='password' name='newPassConfirm' required placeholder='reenter new password' />
        <br/>
        <Input type='submit' value='Update password' className="btn btn-success" />
      </Form>
  </div>
  );
};
