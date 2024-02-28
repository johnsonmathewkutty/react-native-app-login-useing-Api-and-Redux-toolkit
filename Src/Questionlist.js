import React, { useEffect, } from "react";
import { View,Text,FlatList,StyleSheet,TouchableOpacity} from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { fetchQuestions} from "./Redux/Questionlistreducer";
import { useNavigation } from "@react-navigation/native";

const Questionlist=()=>{
    const token=useSelector(state=>state.auth.token)
     const dispatch =useDispatch();
     const datalist=useSelector(state=>state.question.questions.results) || []
     const navigation=useNavigation()
     useEffect(()=>{
    dispatch(fetchQuestions(token))
      navigation.setOptions({
        title:'',
        headerLeft:()=>(
                <Text style={style.headerleft}>Question List</Text>
                ),
        headerRight:()=>(
                <TouchableOpacity style={style.headerbutton}>
                    <Text>Logout</Text>
                </TouchableOpacity>
        )
      })
     },[dispatch,datalist])
     const filteredData = datalist.filter((item) => item.id!== 8);
     
    return(
        <View style={style.maincontainer}>
            <Text style={style.headtext}>Your Questions</Text>
            <Text style={style.subtext}>Here are the list of questions you have asked over time</Text>
            <View style={style.buttoncontainer}>
        <TouchableOpacity style={style.loginbutton} onPress={()=>navigation.navigate('Postquestion')}>
            <Text style={style.buttontext}>Ask a Question</Text>
        </TouchableOpacity>
        </View>
        <View style={style.listcontainer}>
            
        <FlatList
            data={filteredData}
            renderItem={({item}) => {
                return (
                  <View style={style.listinnercontainer}>
                        <Text style={style.titletext}>{item.title}</Text>
                        <Text style={style.descrptext}>{item.description}</Text>
                        <View style={style.respondcontainer}>
                            <TouchableOpacity>
                            <Text>Answer {item.answers_count}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>comment</Text>
                            </TouchableOpacity>
                      </View>
                    </View>
                );
            }}
        />
        </View>
    </View>
    )
}

const style=StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'#eee',
        justifyContent:'center',
        alignItems:'center'
    },
    headtext:{
        fontSize:50,
        fontWeight:'900',
        color:'#000',
        marginTop:20
    },
    subtext:{
        fontSize:17,
        marginLeft:50,
        marginRight:50,
        marginTop:5
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
        height:85,
        marginTop:20
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
        listcontainer:{
          width:'100%',
          height:400
        },
        listinnercontainer:{
            width:'95%',
            height:200,
            backgroundColor:'#fff',
            borderRadius:6,
            marginBottom:10,
            alignSelf:'center',
            alignItems:'center',
            justifyContent:'center',
        },
        titletext:{
            fontSize:20,
            fontWeight:'bold',
            marginBottom:5
        },
        descrptext:{
            fontWeight:'700'
        },
        respondcontainer:{
            width:'93%',
            flexDirection:'row',
            display:'flex',
            justifyContent:'space-between'
        },
        headerleft:{
            fontSize:25,
            marginLeft:15,
            color:'#000',
            fontWeight:'600'
        },
        headerbutton:{
            width:110,
            height:35,
            backgroundColor:'#A9A9A9',
            marginRight:20,
            justifyContent:'center',
            alignItems:'center',
        }
})
export default Questionlist;