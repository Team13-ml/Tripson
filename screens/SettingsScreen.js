import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Settings extends React.Component{
	render(){
		return(
			<View style={styles.settings}>
				<Text>Settings</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	settings : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
	},
})