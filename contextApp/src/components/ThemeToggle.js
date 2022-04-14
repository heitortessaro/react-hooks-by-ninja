import React, {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class ThemeToggle extends Component {
  render() { 
    return (
        <ThemeContext.Consumer>
        {(context) => {
          const { toggleTheme } = context;
          // console.log(context);
          return (
            <button onClick={toggleTheme}> Toggle Theme</button>
          );
        }}</ThemeContext.Consumer>
    );
  }
}
export default ThemeToggle;