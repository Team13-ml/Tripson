import React from 'react';
import {TouchableHighlight, View, StyleSheet, Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export const Row = props => (
<TouchableOpacity>
	<Text>`Location: ${props.address}`</Text>
</TouchableOpacity>
);

export const EmptyRow = () => (
<View style={styles.mainView}>
<TouchableHighlight onPress = {() => this.props.navigation.push('Maps')}>
	<Ionicons name="ios-add-circle-outline" size={100} color="teal"/>
</TouchableHighlight>
<Text style={{fontSize : 20}}>Add Locations</Text>
</View>
);

const styles = StyleSheet.create({
	rowView : {
		backgroundColor: 'yellow',
		alignItems: 'center',
		padding: 15,
	},
	mainView : {
	flex:1,
	justifyContent: 'center',
	alignItems: 'center',
	},
})