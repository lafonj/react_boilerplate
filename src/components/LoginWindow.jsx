import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import { connect } from "react-redux";
import { login } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    login: login_creds => dispatch(login(login_creds))
  };
}

class ConnectedLoginWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    const creds = this.state;
    this.props.login(creds);
    this.setState({ username: "", password: ""});
  }

  render() {
    return (
      <div>
        <Dialog open={true} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Accede a tu cuenta</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para entrar por favor ingrese sus credenciales.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="Username"
              value={this.state.username}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Contraseña"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSubmit} color="primary">
              Acceder
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const LoginWindow = connect(
  null,
  mapDispatchToProps
)(ConnectedLoginWindow);

export default LoginWindow;
