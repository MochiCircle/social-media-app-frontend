import React from "react";
import { connect, useDispatch } from "react-redux";
import { Alert } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./alert.scss";
import { removeAlert } from "../../actions/AlertAction";

interface IAlert {
  id: string;
  alertType: string;
  msg: string;
}

interface IProp {
  alerts: IAlert[];
}

const AlertComp: React.FC<IProp> = (props: IProp) => {
  const { alerts } = props;
  const dispatch = useDispatch();
  if (alerts !== null && alerts.length > 0) {
    return (
      <>
        {alerts.map((alert) => {
          return (
            <Alert color={alert.alertType} key={alert.id}>
              {alert.msg}
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => dispatch(removeAlert(alert.id))}
                pull="right"
                size="lg"
                style={{ cursor: "pointer" }}
              />
            </Alert>
          );
        })}
      </>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state: any) => {
  return { alerts: state.alertStates };
};

export default connect(mapStateToProps)(AlertComp);
