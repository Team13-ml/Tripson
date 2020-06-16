import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

export default class TripForm extends React.Component {
	render(){
		return (
			<View style = {styles.screen}>
			<View style = {styles.screen_view}>
				<Button style = {styles.buttons}
					title = 'Trip Name'
					//onPress = {}
					color = 'grey'
				/>
				<Button style = {styles.buttons}
					title = 'Add Locations'
					onPress = { () => this.props.navigation.push('Locations')}
					color = 'grey'
				/>
				<Button style = {styles.buttons}
					title = 'Kind of Trip'
					//onPress = {}
					color = 'grey'
				/>
				<Button style = {styles.buttons}
					title = 'Set Budget'
					//onPress = {}
					color = 'grey'
				/>
				<Button style = {styles.buttons}
					title = 'Timeline'
					//onPress = {}
					color = 'grey'
				/>
			</View>
			<View style = {styles.button}>
				<Button
					title = 'Plan'
					//onPress = {}
					color = 'grey'
				/>
			</View>
			</View>
		);
	}
} 

const styles = StyleSheet.create({
	screen : {
		flex : 1,
		justifyContent : 'center',
	},
	screen_view: {
		justifyContent : 'space-between',
	},
	button: {
		alignItems : 'center',
		margin : 10,
	},
	buttons: {
		padding : 10,
	},
});