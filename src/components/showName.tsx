import {
    Text,
    View,
    TextInput
} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect, useState } from 'react';
import { setUser } from '../slices/userSlice';
  const ShowName = () => {
    const user = useSelector((state:any)=> state.user.usern)
    const [name,setName] = useState("")
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setUser({ name: name }));
    },[name])
    return (
        <View>
            <Text style={{fontSize:50}}>{user?`Welcome, ${user.name}` : ''}</Text>
            <Text style={{fontSize:50}}>{name}</Text>
            <TextInput placeholder='Enter Name' onChangeText={(text)=>setName(text)}/>
        </View>
    )
  }

export default ShowName
