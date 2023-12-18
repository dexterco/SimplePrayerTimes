import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import MyComponent from './components/MyComponent';
import {
 Linking
} from 'react-native';
function App(): React.JSX.Element {
  useEffect(() => {
    const handleShareIntent = async () => {
      try {
        // Check if the app was opened by a sharing intent
        const initialUrl = await Linking.getInitialURL();
        console.log(initialUrl);
        
  
      } catch (error) {
        console.error('Error handling share intent:', error);
      }
    };

    handleShareIntent();


  }, []);

  return (
    <Provider store={store}>
    <MyComponent />
    </Provider>
  );
}



export default App;
