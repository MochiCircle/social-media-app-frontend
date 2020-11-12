import { connect } from "react-redux";
import React, { SyntheticEvent } from "react";
import { Form, Input } from "reactstrap";
import { setAlert, ISetAlert } from "../../../../actions/AlertAction";
import "../settings.scss";
import { axiosInstance } from "../../../../util/axiosConfig";

const EmailForm: React.FC<ISetAlert> = (props: ISetAlert) => {
  const updateEmail = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailF = event.currentTarget["email"].value;

    const response = await axiosInstance.post("/users/updateEmail/", {
      userId: 5, // Get this from session or store or something
      username: null,
      password: null,
      firstName: null,
      lastName: null,
      email: emailF,
      pic: null,
      status: null,
      bio: null,
      interests: null,
    });

    const json = response.data;
    if (json.email === emailF) {
      props.setAlert("Email successfully changed!", "success", 10000);
    } else {
      props.setAlert("Something has gone Awry", "danger", 10000);
    }
  };

  return (
    <div>
      <h3>Email</h3>
      <Form onSubmit={updateEmail} className="settingsBox" method="POST">
        <div className="whiteText">Email</div>
        <Input type="email" name="email" required placeholder="Email address" />
        <br />
        <Input
          type="submit"
          value="Send email"
          className="btn btn-primary col-6"
        />
      </Form>
    </div>
  );
};

const mapStateToProps = () => {};

const mapDispatchToProps = {
  setAlert: setAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailForm);
