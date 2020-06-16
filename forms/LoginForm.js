import React from 'react';
import {View, Text, Button, TextInput, StyleSheet, KeyboardAvoidingView, TouchableHighlight, ScrollView} from 'react-native';
//import firebase from 'firebase';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {FontAwesome} from '@expo/vector-icons';
import {signInWithGoogleAsync} from './signIn.js';

/*if(!firebase.apps.length){
	firebase.initializeApp({
		apiKey:"AIzaSyCz4Ewo6kuigqmQyF072yy9bXUKjNkhYus",
		authDomain:"pro-handler-265518.firebaseapp.com"
	})
}*/

export default class LoginForm extends React.Component{
	state = {
		username: null,
		password: null,
	}

	handleUsernameChange = username =>{	
		this.setState({username});
	}	

	handlePasswordchange = password =>{
		this.setState({password});
	}

	changePassword = () =>{
		access = this.signInWithGoogleAsync();
	}

	render(){
		return(
			<ScrollView contentContainerStyle={{flexGrow: 1}}>
				<View style = {styles.container}>
					<Text style={styles.textStyle2}>TRIPSON</Text>
					<KeyboardAvoidingView>	
						<TextInput 
							style = {styles.textStyle} 
							placeholder = 'UserName'
							value = {this.state.username}
							onChangeText = {this.handleUsernameChange}
							autoCapitalize = 'none'
						/>
						<TextInput 
							style = {styles.textStyle} 
							placeholder = 'Password'
							value = {this.state.password}
							onChangeText = {this.handlePasswordChange}
							secureTextEntry
						/>
					</KeyboardAvoidingView>
					<View style = {styles.loginStyle}>
						<Button 
							title = 'LogIN' 
							color = 'teal' 
							onPress={() => this.props.navigation.push('Trips')}
						/>
					</View>
					<TouchableHighlight onPress = {this.changePassword}>
						<Text style = {styles.hrStyle}> 
							Forget Password?
						</Text> 
					</TouchableHighlight>
					<Text style = {styles.hrStyle}>────────────  OR  ────────────</Text>
					<View style = {styles.loginStyle}>
						<FontAwesome.Button name='google' onPress = {signInWithGoogleAsync}>
							Continue  with  Google 
						</FontAwesome.Button>
					</View>
					<View style = {styles.loginStyle}>
						<FontAwesome.Button name='facebook' backgroundColor='red'>
							Continue with Facebook
						</FontAwesome.Button>
					</View>
					<TouchableHighlight
	         			style={styles.buttonStyle}
	         			onPress={() => this.props.navigation.push('Register')}
	         		>
	         			<Text style = {styles.hrStyle}> 
								New User? REGISTER
						</Text> 
	            	</TouchableHighlight>
            	</View>
            </ScrollView>
	);}
} 

const styles = StyleSheet.create({
	textStyle : {
		padding : 10,
		borderColor : 'grey',
		borderWidth : 1,
		margin: 10,
	},
	textStyle2: {
    	fontSize: 40, 
    	textAlign:'center',
    	color:'grey'
  	},
  	container: {
    	justifyContent: 'center',
    	flex: 1,
    	padding: 5,
  	},
  	buttonStyle: {
  		position:'absolute', 
  		bottom : 0, 
  		alignSelf:'center',
  	},
  	loginStyle: {
  		alignItems:'center',
  		margin: 10,
  	},
  	hrStyle: {
  		textAlign:'center',
  		color:'grey',
  		margin: 5,
  	},
});