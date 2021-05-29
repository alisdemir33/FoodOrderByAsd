import React from 'react';
import ReactDOM from 'react-dom'
import classes from './Modal.module.css';

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay = (props) => {

  return (
    <div className={classes.error_modal}>
      <h2>{props.title}</h2>    
      {props.Content}
      <div className={classes.error_modal__actions}>
        <button className={classes.button} type="button" onClick={props.onClose}>
          Okay
    </button>
      </div>
    </div>);
}

const ErrorModal = React.memo(props => {  
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />,
        document.getElementById("backdrop-root"))},
      {
        ReactDOM.createPortal(<ModalOverlay title={props.title} onClose={props.onClose} Content={props.children} />,
        document.getElementById("overlay-root"))
      }

    </React.Fragment>
  );
});

export default ErrorModal;
