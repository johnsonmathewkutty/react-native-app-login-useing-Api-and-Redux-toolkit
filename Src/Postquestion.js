import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert,Text,TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { postQuestion } from "./Redux/Questionlistreducer";

const Postquestion = ({navigation}) => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handlePostQuestion = () => {
    if (!questionTitle.trim() || !questionDescription.trim()) {
        Alert.alert('fields are empty')
      return;
    }else{ 
    dispatch(
     postQuestion({
        token,
        questionData: {
          question_title: questionTitle,
          question_description: questionDescription,
          model: "course",
          id: 1,
        },
      })
    );
    setQuestionTitle("");
    setQuestionDescription("");
    navigation.navigate('Questionlist')
  };
}

  return (
    <View style={styles.container}>
      <Text style={styles.toptext}>Ask a question about this course</Text>
      <View style={styles.inputcontainer}>
          <Text style={styles.inputitem}>your Question</Text>
          <TextInput style={styles.textinput}   placeholder="Question Title" onChangeText={(text)=>setQuestionTitle(text)}/> 
          <Text style={styles.inputitem}>Describe your question</Text>
          <TextInput style={styles.textinput2}  onChangeText={(text)=>setQuestionDescription(text)}/>
        </View>
        <View style={styles.buttoncontainer}>
        <TouchableOpacity style={styles.loginbutton} onPress={handlePostQuestion}>
            <Text style={styles.buttontext}>Post Question</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor:'#fff'
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
    height:350,
    marginTop:40
},
inputitem:{
    marginLeft:28,
    marginBottom:8,
    fontSize:18,
    marginTop:25,
    fontWeight:'900'
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
loginbutton:{
  width:'95%',
  height:50,
  backgroundColor:'blue',
  borderRadius:6,
  fontWeight:'700',
  alignItems:'center',
  justifyContent:'center',
  alignSelf:'center'
},
textinput2:{
  width:'95%',
  height:150,
  backgroundColor:'#eee',
  borderRadius:6,
  paddingLeft:10,
  fontWeight:'700'
},
toptext:{
  fontSize:15
}
})

export default Postquestion;
