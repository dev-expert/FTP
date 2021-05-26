import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {FontFamily} from '../common/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 320,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#0F59A5',
    marginTop: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0F59A5',
    paddingVertical: 6,
    marginTop: 10,
    width: 120,
    height: 45,
  },
  myAttendanceBtn: {
    
    alignItems: 'center',
    width: 160,
    height: 40,
    padding: 5,
    borderRadius: 10,
  },
  logoutButton: {
    backgroundColor: 'white',
    width: widthPercentageToDP('40%'),
    padding: heightPercentageToDP('1%'),
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#231F20',
    // marginTop: heightPercentageToDP(7),
    justifyContent: 'center',
    height: 40,
  },
  backButton: {
    backgroundColor: 'white',
    width: widthPercentageToDP('40%'),
    padding: heightPercentageToDP('1%'),
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#231F20',
    // marginTop: heightPercentageToDP(7),
    justifyContent: 'center',
    height: 40,
    marginTop:30,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#231F20',
    fontFamily: FontFamily.fontFamilyMedium,
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 1,
  },
});

export default styles;
