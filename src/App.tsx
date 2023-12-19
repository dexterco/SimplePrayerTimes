import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import MyComponent from './components/MyComponent';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';


function App(): React.JSX.Element {
  
  return (
    <Provider store={store}>
    <MyComponent />
    </Provider>
  );
}



export default App;
