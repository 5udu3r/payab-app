import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import * as color from './src/Colors'
import * as fontsize from './src/FonSizes'

import {
  createSwitchNavigator,
  createAppContainer,
  // createBottomTabNavigator,
  createStackNavigator,
  NavigationActions,
  navigation,
  SwitchActions,
  createDrawerNavigator
} from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import AsyncStorage from '@react-native-community/async-storage';


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';



import Register from './src/Screens/Register';
import Confirm from './src/Screens/Confirm';

import Discover from './src/Screens/Discover';
import RequestDetail from './src/Screens/RequestDetail';

import Payab from './src/Screens/Payab';

import Notifications from './src/Screens/Notifications';

import Home from './src/Screens/Home';
import Messages from './src/Screens/Messages';
import Chat from './src/Screens/Chat';

import Profile from './src/Screens/Profile';
import ViewProfile from './src/Screens/ViewProfile';

import Followings from './src/Screens/Followings';
import Followers from './src/Screens/Followers';
import Archives from './src/Screens/Archives';
import Support from './src/Screens/Support';
import Bookmarks from './src/Screens/Bookmarks';







// DISCOVER --------------------------------DISCOVER------------
const DiscoverStack = createStackNavigator({
  Discover: {
    screen: Discover,
    navigationOptions: ({ navigation }) => {
      return {header: null};
    }
  },
  RequestDetail: {
    screen: RequestDetail,
    navigationOptions: ({ navigation }) => {
      return {
        headerRight: null,
        headerLeft: <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}
        >
          <SimpleLineIcons
            style={{ marginLeft: 10 }}
            name="arrow-left"
            size={fontsize.fontsize20}
            color={color.white} />
        </TouchableOpacity>,
        headerStyle: {
          backgroundColor: color.color_3,
          elevation: 0
        }
      };
    }
  },

}
);

DiscoverStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};



// PROFILE --------------------------------PROFILE------------
const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        header: null

      };
    }
  }

});






// P A Y A B --------------------------------PAYAB------------
const PayabStack = createStackNavigator({
  Payab: {
    screen: Payab,
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    }
  },
  Archives: {
    screen: Archives,
    navigationOptions: ({ navigation }) => {
      let tabBarVisible = true;
      return {
        header: null,
        tabBarVisible
      };
    }
  },
});



// H O M E --------------------------------HOME------------
const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        header: null

      };
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}
        >
          <SimpleLineIcons
            style={{ marginLeft: 10 }}
            name="arrow-left"
            size={fontsize.fontsize20}
            color={color.color_3} />
        </TouchableOpacity>,
        headerTitle: 'پیامها',
        headerTitleStyle: {
          fontFamily: 'ISBold',
          color: color.color_3,
          fontSize: fontsize.fontsize16
        },
        headerStyle: {
          backgroundColor: color.white,
          elevation: 0,

        }
      }
    }
  },
  Archives: {
    screen: Archives,
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    }
  },
  Support: {
    screen: Support,
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    }
  },
  Followers: {
    screen: Followers,
    navigationOptions: () => {
      return {
        header: null
      };
    }
  },
  Followings: {
    screen: Followings,
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    }
  },
  Bookmarks: {
    screen: Bookmarks,
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    }
  },
  RequestDetail: {
    screen: RequestDetail,
    navigationOptions: ({ navigation }) => {
      return {
        headerRight: null,
        headerLeft: <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}
        >
          <SimpleLineIcons
            style={{ marginLeft: 10 }}
            name="arrow-left"
            size={fontsize.fontsize20}
            color={color.white} />
        </TouchableOpacity>,
        headerStyle: {
          backgroundColor: color.color_3,
          elevation: 0
        }
      };
    }
  },

});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};






// N o t i f i c a t i o n --------------------------------NOTIFICATION------------
const NotificationsStack = createStackNavigator({
  Notifications: {
    screen: Notifications,
    navigationOptions: ({ navigation }) => {
      return {
        header: <Text style={{
          width: Dimensions.get('window').width,
          textAlign: 'center',
          paddingVertical: 15,
          fontFamily: 'ISBold',
          color: color.color_3,
          fontSize: fontsize.fontsize16

        }} >توجهات</Text>
      };
    }
  }
});





// ICON WIDGET component
class IconWithBadge extends React.Component {
  render() {
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <SimpleLineIcons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: "#af0404",
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: fontsize.fontsize10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}



// Payab widget Payab Widget
const MessageIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};



// tab ICON tab    I C O N 
const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = SimpleLineIcons;
  let iconName;
  if (routeName === 'Discover') {
    iconName = 'magnifier'
    return <IconComponent name={iconName} size={fontsize.fontsize20} color={tintColor} />
    // We want to add badges to Payab tab icon
  } else if (routeName === 'Payab') {
    iconName = 'plus';
    return <IconComponent name={iconName} size={fontsize.fontsize20} color={tintColor} />
  } else if (routeName === 'Profile') {
    iconName = 'user'
    return <IconComponent name={iconName} size={fontsize.fontsize20} color={tintColor} />
  } else if (routeName === 'Home') {
    iconName = 'home'
    // IconComponent = MessageIconWithBadge;
    return <IconComponent name={iconName} size={fontsize.fontsize20} color={tintColor} />
  } else if (routeName === 'Notifications') {
    iconName = 'bell'
    return <IconComponent name={iconName} size={fontsize.fontsize20} color={tintColor} />
  }

};



const activeTabPoint = (
  <Text style={{ marginBottom: 4, width: 10, height: 2, borderRadius: 10, backgroundColor: color.color_3 }} ></Text>
)




// T-A-B  T-A-B  T-A-B  T-A-B T-A-B  T-A-B
const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Discover: { screen: DiscoverStack, },
    Payab: { screen: PayabStack },
    Notifications: { screen: NotificationsStack },
    Profile: { screen: ProfileStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),

      tabBarLabel: ({ focused }) => {
        const { routeName } = navigation.state;
        switch (routeName) {
          case 'Payab':
            return focused ? (activeTabPoint) : null;
          case 'Home':
            return focused ? (activeTabPoint) : null;
          case 'Discover':
            return focused ? (activeTabPoint) : null;
          case 'Notifications':
            return focused ? (activeTabPoint) : null;
          case 'Profile':
            return focused ? (activeTabPoint) : null;
          default:
            return null;
        }
      },
      initialRouteName: 'Payab'
    }),

    tabBarOptions: {
      activeTintColor: color.color_3,
      inactiveTintColor: color.inactive,
      initialRouteName: 'پایاب',
      // activeBackgroundColor:'#fff',
      style: {

      },
      tabStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'

      },
      activeTabStyle: {
        // backgroundColor: 'red',
      },
      labelStyle: {
        fontSize: fontsize.fontsize10,
        fontFamily: 'ISBold',
      },
      keyboardHidesTabBar: true

    },




  }

);


const DashboardStackNavigator = createStackNavigator({

  Dashboard: {
    screen: TabNavigator,
    navigationOptions: (navigation) => {
      return {
        header: null

      };
    }
  },
  ViewProfile: {
    screen: ViewProfile,
    navigationOptions: ({ navigation }) => {
      return {
        headerRight: null,
        headerLeft: <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}
        >
          <SimpleLineIcons
            style={{ marginLeft: 10 }}
            name="arrow-left"
            size={fontsize.fontsize20}
            color={color.color_3} />
        </TouchableOpacity>,
        headerStyle: {
          backgroundColor: color.white,
          elevation: 0
        }
      };
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}
        >
          <SimpleLineIcons
            style={{ marginLeft: 10 }}
            name="arrow-left"
            size={fontsize.fontsize20}
            color={color.color_3} />
        </TouchableOpacity>,
        headerTitle: 'محمد کمالی',
        headerTitleStyle: {
          fontFamily: 'ISBold',
          color: color.color_3,
          fontSize: fontsize.fontsize16
        },
        headerStyle: {
          backgroundColor: color.white,
          elevation: 0,

        }
      };
    }
  },


  RequestDetail: {
    screen: RequestDetail,
    navigationOptions: ({ navigation }) => {
      return {
        headerRight: null,
        headerLeft: <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center' }}
        >
          <SimpleLineIcons
            style={{ marginLeft: 10 }}
            name="arrow-left"
            size={fontsize.fontsize20}
            color={color.white} />
        </TouchableOpacity>,
        headerStyle: {
          backgroundColor: color.color_3,
          elevation: 0
        }
      };
    }
  },

}
);



export const WelcomeStackNavigator = createStackNavigator({
  Register: {
    screen: Register,
    navigationOptions: ({ }) => {
      return {
        header: null
      };
    }
  },
  Confirm: {
    screen: Confirm,
    navigationOptions: ({ navigation }) => {
      return {
        header:null
      };
    }
  }

}
);


// F O L L O W E R S--------------------------------followers------------
const FollowersStack = createStackNavigator({
  Followers: {
    screen: Followers,
    navigationOptions: () => {
      return {
        header: null
      };
    }
  }


});


// F O L L O W I N G S --------------------------------followings------------
const FollowingsStack = createStackNavigator({
  Followings: {
    screen: Followings,
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    }
  },



});


const ArchivesStack = createStackNavigator({
  Archives: {
    screen: Archives,
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    }
  }


});

const SupportStack = createStackNavigator({
  Support: {
    screen: Support,
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    }
  }


});

const BookmarksStack = createStackNavigator({
  Bookmarks: {
    screen: Bookmarks,
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    }
  }


});






export const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: DashboardStackNavigator,
    Followers: FollowersStack,
    Followings: FollowingsStack,
    Archives: ArchivesStack,
    Support: SupportStack,
    Bookmarks: BookmarksStack,
  },

  {

    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: 'transparent',
    drawerPosition: 'right',
    useNativeAnimations: true,
    edgeWidth: 100,
    drawerType: 'slide',
    gesturesEnabled: true,
    drawerLockMode: false,
    drawerWidth: 300,
    contentOptions: {
      activeTintColor: color.color_3,
      activeBackgroundColor: color.white,
      inactiveBackgroundColor: color.inactive,
      style: {
        backgroundColor: color.black
      },
      itemStyle: {
        textAlign: 'right'
      },
      labelStyle: {
        fontFamily: 'ISBold',
        fontSize: fontsize.fontsize12
      },

    },
    contentComponent: (props) => {
      return (
        <View style={{ backgroundColor: color.lightgrey, flex: 1 }} >
          <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => props.navigation.closeDrawer()} >
            <View
              style={{
                width: "100%",
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginBottom: 2,
                borderBottomWidth: 1,
                borderBottomColor: color.font
              }}
            >
              <Text style={{ fontFamily: "ISBold", fontSize: fontsize.fontsize14, width: '100%', color: color.font, marginRight: 10 }}>نادر مدبری</Text>
              {/* <FontAwesome5 name='users' size={fontsize.fontsize20} color={color.font} /> */}

            </View>
            <TouchableOpacity
              style={{
                width: "100%",
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginBottom: 2,
              }}
              onPress={() => props.navigation.navigate('Followers')}>
              <Text style={{ fontFamily: "ISBold", fontSize: fontsize.fontsize14, width: '100%', color: color.font, marginRight: 10 }}>دنبال کنندگان</Text>
              <FontAwesome5 name='users' size={fontsize.fontsize20} color={color.font} />

            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginBottom: 2,

              }}
              onPress={() => props.navigation.navigate('Followings')}>
              <Text style={{ fontFamily: "ISBold", fontSize: fontsize.fontsize14, width: '100%', color: color.font, marginRight: 10 }}>دنبال شوندگان</Text>
              <FontAwesome5 name='user-friends' size={fontsize.fontsize20} color={color.font} />

            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: "100%",
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginBottom: 2,

              }}
              onPress={() => props.navigation.navigate('Archives')}>
              <Text style={{ fontFamily: "ISBold", fontSize: fontsize.fontsize14, width: '100%', color: color.font, marginRight: 10 }}>آرشیو</Text>
              <FontAwesome5 name='archive' size={fontsize.fontsize20} color={color.font} />

            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginBottom: 2,

              }}
              onPress={() => props.navigation.navigate('Support')}>
              <Text style={{ fontFamily: "ISBold", fontSize: fontsize.fontsize14, width: '100%', color: color.font, marginRight: 10 }}>پشتیبانی</Text>
              <FontAwesome5 name='headset' size={fontsize.fontsize20} color={color.font} />

            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: "100%",
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginBottom: 2,

              }}
              onPress={() => props.navigation.navigate('Bookmarks')}>
              <Text style={{ fontFamily: "ISBold", fontSize: fontsize.fontsize14, width: '100%', color: color.font, marginRight: 10 }}>علاقه مندیها</Text>

              <FontAwesome5 name='heart' size={fontsize.fontsize20} color={color.font} />

            </TouchableOpacity>




          </TouchableOpacity>


          <View style={{ position: 'absolute', bottom: 0, width: '100%', }} >
            <TouchableOpacity
              style={{
                width: "100%",
                // backgroundColor: color.decline,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingVertical: 20,
                paddingHorizontal: 10,
              }}
              onPress={() => props.navigation.closeDrawer()}>
              <Text style={{ fontFamily: "ISBold", fontSize: fontsize.fontsize14, width: '100%', color: color.font, marginRight: 10 }}>بستن</Text>
              <FontAwesome5 name='times-circle' size={fontsize.fontsize20} color={color.font} />

            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: color.black,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingVertical: 20,
                paddingHorizontal: 10
              }}
              onPress={async () => {
                try {
                  await AsyncStorage.removeItem('@token')
                  props.navigation.navigate('Register')
                  return true;
                } catch (e) {
                  return false
                }
              }}>
              <Text style={{ fontFamily: "ISBold", fontSize: fontsize.fontsize14, width: '100%', color: color.white, marginRight: 10 }} >خروج از حساب کاربری</Text>
              <FontAwesome5 name='running' size={fontsize.fontsize20} color={color.white} />

            </TouchableOpacity>
          </View>
        </View>
      )
    }
    // drawerIcon : ({navigation , focused , })
  }
  // {

  //   drawerWidth: 300,
  //   drawerPosition: 'right',
  // }

);

