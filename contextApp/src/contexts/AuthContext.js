import React, { Component, createContext} from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
  state = { 
    isAuthenticated: false
  } 
  toggleAuth = () => {
    this.setState((prev) => ({isAuthenticated: !prev.isAuthenticated}))
  }
  render() { 
    return (
      <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
