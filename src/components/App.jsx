import React, { Component } from 'react';
import {  ThemeProvider } from '@material-ui/core/styles';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

import { THEME } from '../constants/theme'
import LoginWindow from './LoginWindow';
import { preLoadAll, logout } from "../actions/index";

const mapStateToProps = state => {
  return { isLoggedIn: state.user !== null };
};

function mapDispatchToProps(dispatch) {
  return {
    reloadInfo: () => dispatch(preLoadAll()),
    logout: () => dispatch(logout()),
  };
}


class ConnectedApp extends Component {
  constructor(props) {
    super(props);
    this.props.reloadInfo();
  }

  render() {
    return (      
      <div>
      <ThemeProvider theme={THEME}>
        { this.props.isLoggedIn ? <Button onClick={this.props.logout}>Logout</Button> : <LoginWindow /> }
      </ThemeProvider>
    </div>
    );
  }
}
 
const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);
export default App;