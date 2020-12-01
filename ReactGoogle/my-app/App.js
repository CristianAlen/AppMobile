import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home';
import RetiroScreen from './components/Retiro';
import RetiroConPlanilla from './components/RetiroOption'
import IngresoPlanilla from './components/ingresoPlanilla';
import RetiroEspontaneo from './components/retiroEspontaneo';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';

/*
function HomeScreen() {
  return (
      <Home />
  );
}
function RetiroScreen() {
  return (
      <Retiro />
  );
}
*/
const Stack = createStackNavigator();

//<Home /> 
export default class App extends React.Component {

  constructor(props){
    super(props);
    //this.state = {isLoggedIn:false}
}
/*
setLogin(){
    this.setState({isLoggedIn:true});
}

setLogout(){
    this.setState({isLoggedIn:false});
}
*/
  

  render() {
    return(
   // let screen;
    //let estado = this.state.Estado;
    //alert(estado)
    //if(!this.state.isLoggedIn){
      
        //screen = //<LoginScreen onLogout={() => this.setLogout()}/>
        
        <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Retiros" initialParams={{ Estado: false }} component={RetiroScreen}/>
          <Stack.Screen name="Planilla" component={RetiroConPlanilla}/>
          <Stack.Screen name="IngresoPlanilla" component={IngresoPlanilla}/>
          <Stack.Screen name="RetiroEspontaneo" component={RetiroEspontaneo}/>
        </Stack.Navigator>
        </NavigationContainer>

    //} else {
     
        /*screen = <LoginScreen onLogin={() => this.setLogin()}/>*/
       /* screen =
        <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">/*
          <Stack.Screen name="LoginScreen" /*onLogin={() => this.setLogin()}*//* component={LoginScreen} />
          <Stack.Screen name="Retiros" initialParams={{ Estado: false }} component={RetiroScreen}/>
          <Stack.Screen name="Planilla" component={RetiroConPlanilla}/>
          <Stack.Screen name="IngresoPlanilla" component={IngresoPlanilla}/>
          <Stack.Screen name="RetiroEspontaneo" component={RetiroEspontaneo}/>
        </Stack.Navigator>
      </NavigationContainer>*/
    
    //}

    //return screen;

    );
    
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
