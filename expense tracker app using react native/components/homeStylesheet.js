import {StyleSheet, Dimensions} from 'react-native';
const screens = Dimensions.get('window');
export default StyleSheet.create({
  bodyContainer: {
    flex: 1,
  },
  buttonContainer: {
    height: '100%',
    paddingTop: '3%',
  },
  listView: {
    height: screens.height,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrool: {
    borderColor: '#000',

    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopStartRadius: 20,
    borderColor: 'black',
    height: '70%',
    width: '95%',
    backgroundColor: 'lightblue',

    marginTop: '2.5%',
  },
  topbar: {
    width: '100%',
    height: '8%',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 13,
    margin: 15,
  },
  inputheading: {
    margin: 15,
    marginLeft: 25,
    fontSize: 20,
  },
  formbuttonwrap: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  formbutton: {
    borderColor: '#000',
    width: screens.width / 2 - 50,
    height: '20%',
    borderRadius: 35,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formbuttontext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sizebox: {
    padding: 8,
  },
  mainbalance: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 20,
  },
  cont: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  firsttext: {
    justifyContent: 'space-around',
    fontSize: 20,
  },
  pickeritem: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  divider: {
    borderBottomColor: '#000', // Add this to specify bottom border color
    borderBottomWidth: 2,
  },
});
