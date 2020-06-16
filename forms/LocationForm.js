import React from 'react';
import {View, Text, Button, TextInput, StyleSheet, KeyboardAvoidingView, Picker} from 'react-native';


export default class LocationForm extends React.Component{
	render(){
		return(
			<KeyboardAvoidingView style={{padding : 10}} behavior='padding'>
			<Text style={styles.textStyle}>Location</Text>
			<TextInput 
				style={styles.boxStyle}
				//value = {}
			/>
			<Text style={styles.textStyle}>Preferences</Text>
			<Picker mode='dropdown'
					itemStyle={{backgroundColor : 'grey'}}
					itemTextStyle={{ color: '#788ad2' }}>
				<Picker.item label="Cafe" value="cafe"/>
				<Picker.item label="Restaurant" value="restaurant"/>
				<Picker.item label="Movie Hall" value="movie"/>
				<Picker.item label="Heritage Site" value="heritage"/>
			</Picker>
			<View style = {{alignItems:'center'}}>
				<Button title = 'Submit' color = 'teal' onPress={() => this.props.navigation.push('Locations')}/>
			</View>
			</KeyboardAvoidingView>
		);
	}
}
const styles = StyleSheet.create({
	boxStyle : {
	padding : 5,
	borderColor : 'grey',
	borderWidth : 1,
	margin: 5,
	},
	textStyle : {
	fontSize : 20,
	}
});