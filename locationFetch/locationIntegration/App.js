import React, {Component} from 'react';

import {View, Image, Text, TouchableOpacityBase} from 'react-native';
import MapView from 'react-native-maps';

const latitudeDelta = 0.025;
const longitudeDelta = 0.025;

export default class App extends Component {
  state = {
    region: {
      latitudeDelta,
      longitudeDelta,
      latitude: 30.733315,
      longitude: 76.779419,
    },
  };

  onChangeValue = region => {
    alert(JSON.stringify(region));
    this.setState({
      region,
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={{flex: 1}}
          initialRegion={this.state.region}
          onRegionChangeComplete={this.onChangeValue}
        />
        <View
          style={{
            top: '50%',
            left: '50%',
            marginLeft: -24,
            marginTop: -48,
            position: 'absolute',
          }}>
          <Image
            style={{height: 40, width: 40}}
            // source={require('./src/assets/bnew.png')}
          />
        </View>
      </View>
    );
  }
}
