import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Navbar, NavItem, NavLink, Button } from "reactstrap";
import LoginComp from "../login/LoginComp";
import mochiLogo from "../../assets/mochiVectorLogo_smaller.svg";
import "../login/loginStyling.scss";
import { setLoginState } from "../../actions/LoginAction";
import { initialLoginState } from "../login/LoginInitialState";
import ThemeToggle from "../theme/ThemeToggle";
import { Search } from "../search/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import ForgotPassComp from "../login/ForgotPassComp";
import Alert from "../alert/alert";
import RegisterPage from "../login/RegisterPage";

interface IProps {
  userId: number;
  firstname: string;
  lastname: string;
  picUrl: string;
}

const MainNavbar: React.FC<IProps> = (props: IProps) => {
  
  const [showReg, setShowReg] = useState(false);

  const toggleRegComp = () => 
  {
    if(showReg == false){
      setShowReg(true);
    }
    else{
      setShowReg(false);
    }

  }

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(setLoginState(initialLoginState));
    window.location.href = "/spin";
  };

  //If logged in, then these components will render
  if (props.userId > 0) {
    return (
      <>
      <Navbar
        color="dark"
        dark
        expand="md"
        style={{
          width: "100%",
          margin: 0,
          zIndex: 2,
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          padding: 10,
          marginBottom: 30,
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
          <Button
            color="transparent"
            href="/settings"
            style={{
              margin: "0px -5px 0px -10px",
            }}
          >
            <FontAwesomeIcon
              icon={faCog}
              style={{
                display: "inline",
                cursor: "pointer",
                color: "#CCCCCC",
              }}
              href="/settings"
            />
          </Button>
        </span>

        <span>
          <Search />
        </span>

        <span>
          <Button
            onClick={onLogout}
            style={{ height: 38, margin: 5 }}
            className="btn pull-right"
          >
            Logout
          </Button>
        </span>
        <span style={{margin:5}}>
          <ThemeToggle />
        </span>
      </Navbar>
     <Alert />
     </>
    );
  }
  //If not logged in, these components will render...
  else 
  {

    return (
      <>
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
        <div className=" row justify-content-between">
          <NavItem className="col-2">
            <Button onClick={toggleRegComp} className="btn" style={{ margin: 5 }}>Register</Button>
          </NavItem>
          <NavItem className="col-7">
            <LoginComp /> {/* What actually allows you to login */}
          </NavItem>
          <NavItem >
            <ForgotPassComp /> 
          </NavItem>
        </div>
        <span style={{margin:5}}>
          <ThemeToggle />
        </span>
      </Navbar>
      <Alert />
        {showReg ? <RegisterPage /> : <span/> }
      </>
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
