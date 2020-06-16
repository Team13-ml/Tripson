import * as Google from 'expo-google-app-auth';

export const signInWithGoogleAsync = async() => {
  		try {
  			console.log("key Pressed");
    		const result = await Google.logInAsync({
      		androidClientId: '2377213485-vvv0743s6845oqbrulbh6g3j1nj71fi9.apps.googleusercontent.com',
     		scopes: ['profile', 'email'],
    		});
			if (result.type === 'success') {
      			console.log("success");
      			return result.accessToken;
    		} 
    		else {
    			console.log("fail");
      			return { cancelled: true };
    		}
  		} 
  		catch (e) {
  			console.log("exception");
    		return { error: true };
  		}
	}