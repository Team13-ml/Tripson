import React from 'react';
import {View, Button, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {id} from './MapContainer';
import {Ionicons} from '@expo/vector-icons';

const Source = props =>(
	<View>
		<Button title='Delete' onPress={props.onDelete}/>
		<Text>{props.source.address}</Text>
	</View>
);

export default class Locations extends React.Component{
	state = {
		sources : [],
	}

	addSource(){
		this.setState({
			sources : [
			...this.state.sources,
			{id : ++id, address : address, lat : latitude, long : longitude},
			],
		})
	}

	deleteSource(id){
		this.setState({
			sources : this.state.sources.filter(source => source.id!==id)
		})
	}
	render(){
		return(
			this.state.sources == []?
			<View>
			{this.state.sources.map( source =>(
				<Source
					onDelete = {() => this.deleteSource(source.id)}
					source = {source}
				/>
			))}
			</View>:
			<View style={styles.mainView}>
				<TouchableHighlight onPress = {() => this.props.navigation.push('Maps')}>
				<Ionicons name="ios-add-circle-outline" size={100} color="teal"/>
				</TouchableHighlight>
				<Text style={{fontSize : 20}}>Add Locations</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	mainView : {
	flex:1,
	justifyContent: 'center',
	alignItems: 'center',
	},
})