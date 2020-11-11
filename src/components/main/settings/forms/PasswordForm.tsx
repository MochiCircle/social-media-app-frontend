import axios from 'axios';
import React, { SyntheticEvent } from "react";
import { Form, Input } from "reactstrap";
import '../settings.scss';

export const PasswordForm: React.FC = () => {

  const updatePassword = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const oldPassF = event.currentTarget["currentPass"].value;
    const newPassF = event.currentTarget["newPass"].value;
    const newPass2F = event.currentTarget["newPassConfirm"].value;

    if(true) {
      // Get current password
      // Compare inputted password and current password
      // If similar, continue, if different, fail
    } else {
      // This'll probably need to be attached to the if else logic below
    }

    if (newPassF !== newPass2F) {
      alert("Passwords do not match.")
    } else {
    const response = await axios.post(
      "http://localhost:8080/MochiCircle/api/users/update/",
      {
        userId: 5, // Get this from session or store or something
        username: null,
        password: newPass2F,
        firstName: null,
        lastName: null,
        email: null,
        pic: null,
        status: null,
        bio: null,
        interests: null,
      }
    );

    const json = response.data;
    if(json.password===newPass2F) {
      alert("Password successfully changed!");
    } else {
      alert("Something has gone awry.");
    }
  };
};
    
  return (
    <div>
      <h3>Password</h3>
      <Form onSubmit={updatePassword} className="settingsBox" method="POST">
        <div className="whiteText" >Current Password</div>
        <Input type='password' name='currentPass' required placeholder='current' />
        <br/>
        <div className="whiteText" >New Password</div>
        <Input type='password' name='newPass' required placeholder='new' />
        <br/>
        <div className="whiteText" >Confirm New Password</div>
        <Input type='password' name='newPassConfirm' required placeholder='confirm new' />
        <br/>
        <Input type='submit' value='Update password' className="btn btn-success col-6" />
      </Form>
  </div>
  );
};

// //recieves these values from the app's store
// const mapStateToProps = (appState:any) => {
//   return {
//       userId: appState.loginState.id,
//       firstname: appState.loginState.firstname,
//       lastname: appState.loginState.lastname,
//   }
// }

// //HRO export right here
// export default connect<IProps>(mapStateToProps)(LoginComp);