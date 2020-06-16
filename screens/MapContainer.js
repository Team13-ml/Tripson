import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Constants from 'expo-constants';
import MyMapView from '../map/MyMapView';
import MapInput from '../map/MapInput';
import {getLocation} from '../map/getLocation';
import * as Location from 'expo-location';

export default class MapContainer extends Component{
	state = {
		region : {},
		where : null,
	};

	componentDidMount(){
		this.getInitialState();
	}
	getInitialState(){
		getLocation().then(data => {
			this.setState({
			region : {
				latitude : data.latitude,
				longitude : data.longitude,
				latitudeDelta : 0.003,
				longitudeDelta : 0.003,
				},
			});
		}).then( () => {this.returnAddress()})
		.catch(error => {console.log(error)});

	}
	onMapRegionChange(region){
		this.setState({region});
	}
	/*getCoordsFromName(loc){
		this.setState({
			region : {
				latitude : loc.lat,
				longitude : loc.lng,
				latitudeDelta : 0.003,
				longitudeDelta : 0.003,
			},
		});
	}*/
	returnAddress = async() => {
		console.log(this.state.region);
		let where = (await Location.reverseGeocodeAsync(this.state.region))[0];
		console.log(where);
		this.setState({where});
		console.log(this.state.where);
	} 
	render(){
		return(
			<View style = {{flex : 1}} >
				<View style = {{flex : 0.4}} >
					<MapInput /*notifyChange = {(loc) => this.getCoordsFromName(loc)}*/ />
				</View>
				{
					this.state.region['latitude']?
					<View style={{flex : 1}}>
						<MyMapView
							region = {this.state.region}
							onRegionChange = {(reg) => this.onMapRegionChange(reg)}
						/>
						<View style={styles.overlap}>
							<Button title = "Add Location" color="teal" onPress={() => this.props.navigation.push('Form',{
								add : this.state.where.name,
								lat : this.state.region['latitude'],
								long : this.state.region['longitude']
							})}/>
						</View>
					</View> : null
				}
				
			</View>
		);
	}

} 

const styles = StyleSheet.create({
	overlap : {
		alignSelf: 'center',
		position:'absolute', 
		bottom: 0,
		paddingBottom: 10, 
	},
});