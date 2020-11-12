import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Spinner } from "reactstrap";
import { axiosInstance } from "../../../../util/axiosConfig";
import { setAlert, ISetAlert } from "../../../../actions/AlertAction";
import "../settings.scss";

interface IProps extends ISetAlert {
  id: number;
  username: string;
  email: string;
}

const PasswordForm: React.FC<IProps> = (props: IProps) => {
  const [showSpinner, setSpinner] = useState(false);

  const updatePassword = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSpinner(true);
    const username = props.username;
    const oldPassF = event.currentTarget["currentPass"].value;
    const newPassF = event.currentTarget["newPass"].value;
    const newPass2F = event.currentTarget["newPassConfirm"].value;

    const verifyPassword = await axiosInstance.post("/users/validate/", {
      username: username,
      password: oldPassF,
    });

    if (newPassF !== newPass2F) {
      props.setAlert("Passwords do not match.", "success", 10000);
      setSpinner(false);
    } else if (verifyPassword.data.username !== props.username) {
      props.setAlert("Your password was incorrect.", "warning", 10000);
      setSpinner(false);
    } else {
      const response = await axiosInstance.post("/users/update/", {
        userId: props.id,
        password: newPass2F,
        email: props.email,
      });

      window.scrollTo(0, 0);
      setSpinner(false);

      const json = response.data;
      if (json.password === newPass2F) {
        props.setAlert("Password Successfully Changed", "success", 10000);
      } else {
        props.setAlert("Something has gone Awry", "danger", 10000);
      }
    }
  };

  return (
    <div>
      <h3>Password {showSpinner ? <Spinner color="primary" /> : <span />}</h3>
      <Form onSubmit={updatePassword} className="settingsBox" method="POST">
        <div className="whiteText">Current Password</div>
        <Input type="password" name="currentPass" className="textEntry" required placeholder="••••" />
        <br />
        <div className="whiteText">New Password</div>
        <Input type="password" name="newPass" className="textEntry" required placeholder="••••" />
        <br />
        <div className="whiteText">Confirm New Password</div>
        <Input
          type="password"
          name="newPassConfirm"
          className="textEntry"
          required
          placeholder="••••"
        />
        <br />
        <Input
          type="submit"
          value="Update password"
          className="btn btn-success col-6"
        />
      </Form>
    </div>
  );
};

//recieves these values from the app's store
const mapStateToProps = (appState: any) => {
  return {
    id: appState.loginState.id,
    username: appState.loginState.username,
    email: appState.loginState.email,
  };
};

const mapDispatchToProps = {
  setAlert: setAlert,
};

//HRO export right here
export default connect(mapStateToProps, mapDispatchToProps)(PasswordForm);
