import React from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";

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
  if (alerts !== null && alerts.length > 0) {
    return (
      <>
        {alerts.map((alert) => {
          return (
            <Alert color={alert.alertType} key={alert.id}>
              {alert.msg}
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
