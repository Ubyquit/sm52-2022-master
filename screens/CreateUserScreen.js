import React, {useState} from 'react'
import { View,Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';

//importar los datos firebase
import firebase from "../database/firebase";

const CreateUserScreen = (props) => {

    const initalState={
        name:"",
        email:"",
        phone:"",
    };

    const [state, setState] = useState(initalState);

    const handleChangeText = (value, name) => {
        setState({...state, [name]:value});
    };

    const saveNewUser = async () => {
        if(state.name===""){
            alert("please provide a name");
        }else{
            try{
                await firebase.db.collection("users").add({
                        name:state.name,
                        email:state.email,
                        phone:state.phone,
                    });
                    props.navigation.navigate("UsersList");
            }catch(error){
                console, log(error);
            }
        }
    };

    return (
        <ScrollView style={Styles.container}>
            <View style={Styles.imputGroup}>
                <TextInput 
                placeholder="Name User"
                onChangeText={(value) => handleChangeText(value,"name")}
                value = {state.name}
                />
            </View>
            <View style={Styles.imputGroup}>
                <TextInput placeholder="Email User"
                onChangeText={(value) => handleChangeText(value,"email")}
                value = {state.email}/>
            </View>
            <View style={Styles.imputGroup}>
                <TextInput placeholder="Phone User"
                onChangeText={(value) => handleChangeText(value,"phone")}
                value = {state.phone}/>
            </View>
            <View style={Styles.button}>
                <Button title="Save User" onPress={() => saveNewUser()} />
            </View>
        </ScrollView>
    )
};

const Styles = StyleSheet.create(
    {
        container:{
            flex:1,
        },
        imputGroup:{
            flex:1,
            padding:0,
            marginBottom:15,
            borderBottomWidth:1,
            borderBottomColor:"#cccccc",
        },
        loader:{
            left:0,
            right:0,
            top:0,
            bottom:0,
            position:"absolute",
            alignItems:"center",
            justifyContent:"center",
        }
    }
);

export default CreateUserScreen