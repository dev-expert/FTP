import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styled from 'styled-components/native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {FontFamily} from './colors';
const NewHeader = ({
  Navigation,
  icon,
  centerText,
  RightIcon,
  RightNavigation,
  accessibilityLabel,
}) => {
  return (
    <>
      <SafeAreaView />
      <HeaderView>
        <TouchableOpacity onPress={Navigation} accessibilityLabel={accessibilityLabel}>
        
        </TouchableOpacity>
        <Title>{centerText}</Title>
        {/* <Title>{RightText}</Title> */}
        <TouchableOpacity onPress={RightNavigation}>
          <FeatherIcon name={RightIcon} size={30} color="#231F20" />
        </TouchableOpacity>
      </HeaderView>
    </>
  );
};
const HeaderView = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#0F59A5',
  width: '100%',
  paddingTop: heightPercentageToDP(1),
  paddingBottom: heightPercentageToDP(1),
  paddingLeft: 15,
  paddingRight: 15,
});
const Title = styled.Text({
  color: 'white',
  fontSize: 20,
  lineHeight: 24,
  fontFamily: FontFamily.fontFamilyMedium,
});

export default NewHeader;
