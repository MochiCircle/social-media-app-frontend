import React from "react";
import { connect, useDispatch } from "react-redux";

import { Navbar, NavItem, NavLink, Button } from "reactstrap";
import LoginComp from "../login/LoginComp";
import mochiLogo from "../../assets/mochiVectorLogo_smaller.svg";
import "../login/loginStyling.scss";
import { setLoginState } from "../../actions/LoginAction";
import { initialLoginState } from "../login/LoginInitialState";
import ThemeToggle from "../theme/ThemeToggle";
import { Search } from "../search/Search";

interface IProps {
  userId: number;
  firstname: string;
  lastname: string;
  picUrl: string;
}

const MainNavbar: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(setLoginState(initialLoginState));
  };

  //If logged in, then these components will render
  if (props.userId > 0) {
    return (
      <Navbar
        color="dark"
        dark
        expand="md"
        style={{
          width: "100%",
          margin: 0,
          marginBottom: "30px",
          zIndex: 2,
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          padding: 10,
        }}
        className="nav justify-content-center"
      >
        <span>
          <Button className="btn pull-left" href="/" style={{ margin: 5 }}>
            <img className="logo-vec" src={mochiLogo} alt="MC" />
          </Button>
        </span>
        <span>
          <Button
            className="btn pull-left"
            href="/profile"
            style={{ margin: 5 }}
          >
            <img src={props.picUrl} alt="Prof Pic" className="prof-img" />{" "}
            {props.firstname}'s Profile
          </Button>
        </span>

        <span>
          <Search />
        </span>

        <span>
          <Button
            onClick={onLogout}
            style={{ height: 44, margin: 5 }}
            className="btn pull-right"
          >
            Logout
          </Button>
        </span>
        <span>
          <ThemeToggle />
        </span>
      </Navbar>
    );
  }
  //If not logged in, these components will render...
  else {
    return (
      <Navbar
        color="dark"
        dark
        expand="md"
        style={{
          width: "100%",
          margin: 0,
          marginBottom: "30px",
          zIndex: 2,
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          padding: 10,
        }}
        className="nav justify-content-center"
      >
        <div className="row justify-content-between">
          <NavItem className="col-2">
            <NavLink href="/register">
              <Button style={{ margin: 5 }}>Register</Button>
            </NavLink>
          </NavItem>
          <NavItem className="col-7">
            <LoginComp /> {/* What actually allows you to login */}
          </NavItem>
        </div>
        <ThemeToggle />
      </Navbar>
    );
  }
};

//recieves these values from the app's store
const mapStateToProps = (appState: any) => {
  return {
    userId: appState.loginState.id,
    firstname: appState.loginState.firstname,
    lastname: appState.loginState.lastname,
    picUrl: appState.loginState.picUrl,
  };
};

//HOC export right here babyyy
export default connect<IProps>(mapStateToProps)(MainNavbar);
