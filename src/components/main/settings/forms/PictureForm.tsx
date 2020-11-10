import axios from 'axios';
import React, { SyntheticEvent } from "react";
import { connect } from 'react-redux';
import { Form, Input, Label } from "reactstrap";
import { axiosInstance } from '../../../../util/axiosConfig';
import '../settings.scss';

interface IProps {
  userId: number
}

const PictureForm: React.FC<IProps> = (props: IProps) => {

  const updateProfilePic = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const usernameF = event.;
    const formData = new FormData();
    formData.append("image", event.currentTarget["imageF"].files[0]);
    formData.append("userId", `${props.userId}`);

    // <Spinner color='success' />
    // document.getElementById("reimbTableBody").append(tr);
    const response = await axiosInstance.post(
      "/users/updatePic",
      formData
    );
  };

  return (
    <div>
      <h3>Profile Picture</h3>
      <Form onSubmit={updateProfilePic} className="settingsBox" method="POST">
      <Label className="whiteText">File</Label>
        <Input type="file" name="imageF" id="exampleFile" />
        <br/>
        <Input type='submit' value='Update photo' className="btn btn-success" />
      </Form>
  </div>
  );
};

//recieves these values from the app's store
const mapStateToProps = (appState:any) => {
  return {
    userId: appState.loginState.id
  }
}

//HRO export right here
export default connect<IProps>(mapStateToProps)(PictureForm);