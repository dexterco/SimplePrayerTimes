import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';
import { useEffect, useState } from 'react';
import {
    Text,
    View,
    Button,
    Image
  } from 'react-native';
import ShowName from './showName';
import ReceiveSharingIntent from 'react-native-receive-sharing-intent';
const MyComponent = () => {
  const user = useSelector((state:any) => state.user.usern);
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Dispatch the setUser action to update the user state
    dispatch(setUser({ name: 'John' }));
  };

  const [imageUrl,setImageUri] = useState("")
useEffect(()=>{
  ReceiveSharingIntent.getReceivedFiles((files:any) => {
    // files returns as JSON Array example
    //[{ filePath: null, text: null, weblink: null, mimeType: null, contentUri: null, fileName: null, extension: null }]
     console.log(files[0].contentUri);
     setImageUri(files[0].contentUri)
     
  }, 
  (error:any) =>{
    console.log(error);
  }, 
  'ShareMedia' // share url protocol (must be unique to your app, suggest using your apple bundle id)
  );
  return()=>{
    ReceiveSharingIntent.clearReceivedFiles();
  }
},[])

  return (
    <View>
      <Text>{user ? `Welcome, ${user.name}` : 'Please log in'}</Text>
      <Button title="Login" onPress={handleLogin} />
      <ShowName/>
      <Image source={{ uri: imageUrl }} style={{ width: 400,height:400,}} />
    </View>
  );
};



export default MyComponent;