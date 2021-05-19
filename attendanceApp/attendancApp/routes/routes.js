import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator,TransitionPresets} from 'react-navigation-stack';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';

import {HomeScreen, CheckInOut, checkDetails } from '../screens';

export const rootNavigator = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
        },
        CheckInOut: {
            screen: CheckInOut,
        },
        checkDetails: {
            screen: checkDetails,
        }
    },
    {
        initialRouteName: 'HomeScreen',
        headerMode: 'none',
        navigationOptions: {
          gesturesEnabled: false,
          ...TransitionPresets.SlideFromRightIOS
        },
      },
);

const AppSwitchNavigator = createAnimatedSwitchNavigator(
    {
      Main: {screen: rootNavigator},
    },
    {
      transition: (
        <Transition.Together>
          <Transition.In
            type="slide-bottom"
            durationMs={400}
            interpolation="easeInOut"
          />
          <Transition.In type="fade" durationMs={1000} />
        </Transition.Together>
      ),
    },
  );
  const AppContainer = createAppContainer(AppSwitchNavigator);
  
  export default AppContainer;