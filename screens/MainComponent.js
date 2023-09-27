
import { Platform, View } from 'react-native';
import  Constants  from 'expo-constants';
import DirectoryScreen from './DirectoryScreen';
import HomeboyzInfoScreen from './HomeboyzInfoScreen';
import { createStackNavigator } from '@react-navigation/stack';

const DirectoryNavigator =() => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator
           initialRouteName='Directory'
           screenOptions={{
            headerStyle:{
                backgroundColor: 'green'

            },
            headerTintColor:'#fff'
           }}
        >
          <Stack.Screen
          name='Directory'
          component ={DirectoryScreen}
          options={{ title: 'Homeboyz Directory'}} />
          <Stack.Screen
          name='HomeboyzInfo'
          component ={HomeboyzInfoScreen}
          options={({ route }) => ({
            title: route.params.homeboyz.name
          })} />

        </Stack.Navigator>

    )
}


const Main = () => {

    return(
        <View 
        style={{
            flex: 1,
            paddingTop : 
            Platform.OS === 'ios' ? 0 : Constants.statusBarHeight

        
        }}>
            <DirectoryNavigator/>
        </View>
    );

};
export default Main;