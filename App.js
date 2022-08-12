import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import Home from './src/paginas/home';
import Contato from './src/paginas/contato';
import Sobre from './src/paginas/sobre';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
          tabBarActiveTintColor:'black',
          tabBarStyle:{
            backgroundColor:'purple'
          }
        }}>
      <Tab.Screen name = 'Home' component ={Home} options ={{
        tabBarIcon: ({color, size}) => {
          return <Ionicons name="home" size={size} color={color} />
        }
      }}>

      </Tab.Screen>
      <Tab.Screen name = 'Sobre' component ={Sobre}options ={{
        tabBarIcon: ({color, size}) => {
          return <AntDesign name="search1" size={size} color={color} />
        }
      }}
      ></Tab.Screen>
      <Tab.Screen name = 'Contato' component ={Contato}options ={{
        tabBarIcon: ({color, size}) => {
          return <Foundation name="telephone" size={size} color={color} />
        }
      }}
      ></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
