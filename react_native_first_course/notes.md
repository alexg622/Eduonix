react-native init mymobileapp
react-native start
react-native run-ios
react-native log-ios

might have to go into excode then location then terminal to xcode version to be able to use run-ios


npm install react-native-vector-icons --save
npm install --save react-navigation

open xcode
Libraries
right click add files to "Name of project"
node_modules/react_native/Libraries/CameraRoll/RCTCameraRoll.xcodeproj
click add and then go to build phases
Click Link Binary With Libraries click plus button add libRCTCameraRoll.a
then go to info.plist
information Property List
add new key Privacy - Photo Library Usage Description
value = what you want its what shows up when you try to use camera

for geolocation in info.plist under dict paste
<key>NSLocationWhenInUseUsageDescription</key>


adjust header style

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


}



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
     The header config from HomeScreen is now here 
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
