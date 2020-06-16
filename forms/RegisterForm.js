import React from 'react';
import {View, Text, Button, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import * as Google from 'expo-google-app-auth';
import {signInWithGoogleAsync} from './signIn.js';

export default class RegisterForm extends React.Component{
	state = {
		username: null,
		password: null,
		confirmPassword: null,
		error: null,
	}

	handleUsernameChange = username =>{	
		this.setState({username});
	}	

	handlePasswordchange = password =>{
		this.setState({password});
	}

	handleConfirmPasswordChange = confirmPassword =>{
		this.setState({confirmPassword});
		if(this.state.password != this.state.confirmPassword)
			this.setState({error : "Passwords don't match"});
	}

	render(){
	return(
		<ScrollView contentContainerStyle={{flexGrow: 1}}>
			<View style = {styles.container}>
				<Text style={{color: 'red'}}> {this.state.error} </Text>
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
					<TextInput 
						style = {styles.textStyle} 
						placeholder = 'Confirm Password'
						value = {this.state.confirmassword}
						onChangeText = {this.handleConfirmPasswordChange}
						secureTextEntry
					/>
				</KeyboardAvoidingView>
				<View style = {styles.loginStyle}>
					<Button 
						title = 'Register' 
						color = 'teal' 
						onPress = {() => this.props.navigation.push('Locations')}
					/>
				</View>
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
			</View>
		</ScrollView>
	);}
} 

const styles = StyleSheet.create({
	Container : {
		justifyContent: 'center',
		flex: 1,
	},
	textStyle : {
		padding : 10,
		borderColor : 'grey',
		borderWidth : 1,
		margin: 10,
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