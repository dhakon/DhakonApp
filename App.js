import React, { useState } from 'react';
import { ApplicationProvider } from 'react-native-ui-kitten';
import { mapping, light, dark } from '@eva-design/eva';
import HomeScreen from './src/screens/HomeScreen'

const themes = { light, dark };

const App = () => {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

    return (
      <ApplicationProvider mapping={mapping} theme={themes[theme]}>
        <HomeScreen toggleTheme={toggleTheme}/>
      </ApplicationProvider>
    );
  }

export default App

