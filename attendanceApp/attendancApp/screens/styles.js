import {StyleSheet} from 'react-native';

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
      margin: 10,
      alignSelf: 'flex-end',
      alignItems: 'center',
  
      width: 160,
      height: 40,
      padding: 5,
      borderRadius: 10,
    },
  });

  export default styles