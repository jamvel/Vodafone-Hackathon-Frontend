import React from 'react';
import AppContainer from "./components/AppContainer";
import styles from "./styles/global.scss";

class App extends React.Component {
  render() {
    return (
    <React.Fragment>
      <AppContainer />
    </React.Fragment>
    );
  }
}

let storybook = false;
export default (__DEV__ && storybook) ? require('./storybook').default : App;
