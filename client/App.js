import React, { useState, useEffect } from 'react';
import SignIn from './components/Signin.js';
import MainContainer from './components/MainContainer.js';
import Register from './components/Register.js';
import Favorites from './components/Favorites.js';
import NavBar from './components/NavBar.js';
import Test from './components/Test.js';

import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const App = () => {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="router">
        {console.log('DARKSTATE IN APP', darkState)}

        {/* <NavBar handleThemeChange={handleThemeChange} darkState={darkState} /> */}

        <main>
          <Switch>
            {/* <Route exact path="/signin" component={SignIn} /> */}
            {/* <Route exact path="/register" component={Register} /> */}
            {/* <Route exact path="/favs" component={Favorites} /> */}
            <Route exact path="/">
              <NavBar
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setDarkState={setDarkState}
                darkState={darkState}
                handleThemeChange={handleThemeChange}
              />
              <MainContainer
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            </Route>
            <Route exact path="/signin">
              <SignIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </Route>

            <Route exact path="/register">
              <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </Route>
            <Route exact path="/favs">
              <NavBar
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setDarkState={setDarkState}
                darkState={darkState}
                handleThemeChange={handleThemeChange}
              />
              <Favorites
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            </Route>
            <Route exact path="/test" component={Test} />
          </Switch>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
