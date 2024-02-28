import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {Provider}  from "react-redux";

import Store from './Src/Redux/Store';
import Login from "./Src/Login";
import Questionlist from "./Src/Questionlist";
import Postquestion from "./Src/Postquestion";



const stack=createStackNavigator()

const App=()=>{
    return(
        <Provider store={Store}>
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Login" component={Login}/>
                <stack.Screen name="Questionlist" component={Questionlist}/>
                <stack.Screen name="Postquestion" component={Postquestion}/>           
                 </stack.Navigator>
        </NavigationContainer>
        </Provider>
    )
}

export default App;