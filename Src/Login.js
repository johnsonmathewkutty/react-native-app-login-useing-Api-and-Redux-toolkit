import React from "react";
import { View,StyleSheet,Text,TextInput,TouchableOpacity} from "react-native";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "./Redux/Authreducer";

const Login=({navigation})=>{
    const dispatch=useDispatch()
    const [email,setemail]=useState()
    const [password,setpassword]=useState()
    const handleLogin = async () => {
        try {
          const response = await axios.post('https://portal.learnabble.xyz/api/v2/accounts/login/', {
            email,
            password,
          });
          const token = response.data.access_token.token;
          dispatch(setToken(token));
          navigation.navigate('Questionlist');
        } catch (error) {
          console.error(error);
        }
      };
    return(
        <View style={style.container}>
        <Text style={style.headtext}>My Course App</Text>
        <View style={style.inputcontainer}>
          <Text style={style.inputitem}>your Emaill</Text>
          <TextInput style={style.textinput} placeholder="Enter your Emaill" onChangeText={(text)=>setemail(text)}/> 
          <Text style={style.inputitem}>Password</Text>
          <TextInput style={style.textinput} placeholder="Enter your Password" onChangeText={(text)=>setpassword(text)}/>
        </View>
        <View style={style.buttoncontainer}>
        <TouchableOpacity style={style.loginbutton} onPress={handleLogin}>
            <Text style={style.buttontext}>Login</Text>
        </TouchableOpacity>
        </View>
        <Text style={style.textnote}>By clicking the Login button you agree to the terms and conditions</Text>
        <TouchableOpacity style={style.forgotbutton} >
            <Text style={style.forgottext}>FORGOT PASSWORD?</Text>
        </TouchableOpacity>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    headtext:{
        fontSize:35,
        color:'#000',
        fontWeight:'900'
    },
    textinput:{
        width:'87%',
        height:50,
        alignSelf:'center',
        backgroundColor:'#eee',
        borderRadius:6,
        paddingLeft:10,
        fontWeight:'700'
    },
    inputcontainer:{
        width:'100%',
        height:250,
        marginTop:40
    },
    inputitem:{
        marginLeft:28,
        marginBottom:8,
        fontSize:18,
        marginTop:25,
        fontWeight:'900'
    },
    loginbutton:{
        width:'87%',
        height:50,
        backgroundColor:'blue',
        borderRadius:6,
        fontWeight:'700',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    buttoncontainer:{
        width:'100%',
        height:65
    },
    buttontext:{
        fontSize:20,
        color:'#fff',
        fontWeight:'900'
    },
    textnote:{
        marginRight:70,
        fontSize:14,
        marginLeft:35,
        fontWeight:'400'
        },
        forgottext:{
         color:'blue',
         fontSize:18,
         fontWeight:'600'
        },
        forgotbutton:{
            marginTop:60
        }
})

export default Login;