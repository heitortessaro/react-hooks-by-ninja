import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = { 
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
    dark: { syntax: '#ddd', ui: '#333', bg: '#555'},
  } 
  render() { 
    return (
      <ThemeContext.Provider value={{...this.state}}>
        {/* place the components of app as children of the provider */}
        {this.props.children} 
      </ThemeContext.Provider>
    );
  }
}
 
export default ThemeContextProvider;