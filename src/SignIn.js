import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Modal,
  Backdrop,
  Fade,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: 500,
    width: '90%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  closeButton: {
    marginLeft: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

function SignIn({ user, onClose }) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    onClose();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign in logic here
    onClose();
  };

  return (
    <Modal
      className={classes.modal}
      open={!Boolean(user)}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={!Boolean(user)}>
        <div className={classes.paper}>
          <div className={classes.header}>
            <Typography variant="h6">Sign In</Typography>
            <CloseIcon className={classes.closeButton} onClick={handleClose} />
          </div>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              className={classes.textField}
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              className={classes.textField}
              value={password}
              onChange={handlePasswordChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitButton}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
}

export default SignIn;
