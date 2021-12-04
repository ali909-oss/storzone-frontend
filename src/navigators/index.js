import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import {
  SplashScreen,
  WelcomeScreen,
  SigninScreen,
  SignupScreen,
  ForgotPasswordScreen,
  RegisterPhoneScreen,
  VerificationScreen,
   
   
} from '../screens';  
import orders from '../screens/orders';
import {connect} from 'react-redux'; 
import Help from '../components/helpandcontact'; 
import Tab from '../screens/Tabs';
import Feedscreen from '../screens/Feedscreen'; 


const Stack = createStackNavigator();

const Navigators = () => {
  return ( 
      <Stack.Navigator screenOptions={{headerShown: false}}>
       
           
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen
              name="RegisterPhone"
              component={RegisterPhoneScreen}
            />
            
            <Stack.Screen name="Verification" component={VerificationScreen} />
          
            <Stack.Screen name="Tabs" component={Tab} />
            
            <Stack.Screen name="Feed" component={Feedscreen} />
              
        
         
      </Stack.Navigator> 
  );
};

 
export default Navigators