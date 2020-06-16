import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Profile extends React.Component{
	render(){
		return(
			<View style={styles.profile}>
				<Text>Profile</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	profile : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
})