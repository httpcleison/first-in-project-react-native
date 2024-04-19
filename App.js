import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//pages
import PageLogin from './pages/login';
import PageCadastro from './pages/cadastro';
import PageSobre from './pages/sobre';
import PageInicio from './pages/inicio'

//componentes
import Header from './componentes/header'

const Stack = createStackNavigator();

function HeaderWithNavigation() {
  const navigation = useNavigation();
  return <Header navigation={navigation} />;
}

export default function App(){
  let dados = [{"username": "cleison", "password": "123123"}]
  return (
    <View style={styles.container}>  
      <NavigationContainer>
        <HeaderWithNavigation/>    
        <Stack.Navigator initialRouteName='PageLogin'>
          <Stack.Screen name="PageLogin" component={PageLogin} options={{ headerShown: false }} initialParams={{dados: dados}}/>
          <Stack.Screen name="PageCadastro" component={PageCadastro} options={{ headerShown: false }}/>
          <Stack.Screen name="PageSobre" component={PageSobre} options={{ headerShown: false }}/>
          <Stack.Screen name="PageInicio" component={PageInicio} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar hidden />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: '100%',
    padding: 10,
    backgroundColor: "blue",
  }
})