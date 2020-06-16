import React, {Component} from 'react';
import {StyleSheet, ScrollView, TextInput, View} from 'react-native';
//import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';

export default class MapInput extends Component{
	 render(){
	 	return(
	 		<View style = {{alignItems : 'center'}}>
	 			<GoogleAutoComplete apiKey="AIzaSyBhii3XUovWdRAZjx1_P-uGMAQ9rrjoD9Q" debounce={300}>
      				{({ inputValue, handleTextChange, locationResults, fetchDetails }) => (
        				<React.Fragment>
        					{console.log('locationResults',locationResults)}
          					<TextInput
            					style={styles.textStyle}
            					onChangeText={handleTextChange}
            					placeholder="Search"
          					/>
        				</React.Fragment>
     				 )}
    			</GoogleAutoComplete>
    		</View>
	/*render(){
		return(
			<GooglePlacesAutocomplete
				placeholder = 'Search'
				minLength = {3}
				autoFocus = {false}//focuses the input on componentDidMount
				returnKeyType = {'search'}//how the return key should look
				listViewDisplayed = 'auto'
				fetchDetails = {true}
				renderDescription = {row => row.description}
				onPress = {(data,details = null) => {
					this.props.notifyChange(details.geometry.location);
				}}
				query = {{ //https://developers.google.com/places/web-service/search specifies the googlePlacesSearch API query parameters
					key: 'AIzaSyBhii3XUovWdRAZjx1_P-uGMAQ9rrjoD9Q',
					language: 'en',
					rankby: 'distance'//in the suggestions
				}}
				GooglePlacesDetailsQuery = {{
					field : 'formatted_address',
				}}
				nearbyPlacesAPI = 'GooglePlacesSearch'//which API to use(GoogleReverseGeocoding or GooglePlacesSearch)
				debounce = {300}//render the component when the change is less frequent ie., after 200ms
			/>
		);
	}*/
);
} }
const styles = StyleSheet.create({
	textStyle : {
              height: 40,
              width: 300,
              borderWidth: 1,
              paddingHorizontal: 16,
            },
});
