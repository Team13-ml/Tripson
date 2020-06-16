import React from 'react';
import {View, Text, StyleSheet, Button, TouchableHighlight} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class TripInfo extends React.Component{
	static navigationOptions = ({navigation}) => {
		return {
		headerRight: () => (
			<View style = {styles.bstyle}>
			<TouchableHighlight 
				onPress = {() => navigation.push('Planner')}
			>
				<Ionicons name="ios-add" size={50} color="white"/>
			</TouchableHighlight>
			</View>
		),
	};
	};
	render(){
		return(
			<View style={styles.trip}>
				<Ionicons name="ios-car" size={100} color="teal"/>
				<Text style={styles.hrStyle}>currently no trips</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	trip : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
	hrStyle: {
  		textAlign:'center',
  		color:'grey',
  		margin: 5,
  		fontSize: 20,
  	},
  	bstyle: {
  		margin: 10,
  	},
});