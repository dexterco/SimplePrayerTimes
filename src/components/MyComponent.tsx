import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../slices/userSlice';
import {
    Text,
    View,
    Button
  } from 'react-native';
import ShowName from './showName';
const MyComponent = () => {
  const user = useSelector((state:any) => state.user.usern);
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Dispatch the setUser action to update the user state
    dispatch(setUser({ name: 'John' }));
  };

  return (
    <View>
      <Text>{user ? `Welcome, ${user.name}` : 'Please log in'}</Text>
      <Button title="Login" onPress={handleLogin} />
      <ShowName/>
    </View>
  );
};

export default MyComponent;