import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";

import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.handleModal} />;
};

const OverlayModal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>{props.title}</header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.action}>
        <Button onClick={props.handleModal}>Okay</Button>
      </footer>
    </Card>
  );
};



const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop handleModal={props.handleModal} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <OverlayModal
          title={props.title}
          message={props.message}
          handleModal={props.handleModal}
        />,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};

export default ErrorModal;
