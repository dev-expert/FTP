//importing components from react and react native
import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Picker,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//components

import Buttons from './components/Button';

const screens = Dimensions.get('window');

//styling part of components
const styles = StyleSheet.create({
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
    borderRadius: 5,
    margin: 15,
  },
  inputheading: {
    margin: 15,
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
    height: '15%',
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
  },
});

function HomeScreen({navigation, route}) {
  let [list, setList] = useState([]);
  let rem_balance;
  if (rem_balance == null) {
    rem_balance = 0;
  }
  // taking parameters from the input screen to home screen
  if (route && route.params) {
    const {
      amount,
      description,
      type,
      datesday,
      datesmonth,
      datesyear,
    } = route.params;
    let item = {
      amount: amount,
      description: description,
      type: type,
      datesday: datesday,
      datesmonth: parseInt(datesmonth) + 1,
      datesyear: datesyear,
    };

    let newarramountay = [...list, item];

    route.params = null;
    setList(newarramountay);
  }
  //logical part behind the transcation shown in home screen
  console.log(list);
  let arramount = [];
  let arrtype = [];
  for (var k in list) {
    arramount.push(list[k].amount);
    arrtype.push(list[k].type);
  }
  console.log(arramount);
  for (var i = 0; i < arramount.length; i++) {
    if (arrtype[i] === 'Credit') {
      rem_balance = rem_balance + parseInt(arramount[i]);
      console.log(rem_balance);
    } else {
      rem_balance = rem_balance - parseInt(arramount[i]);
      if (rem_balance <= 0) {
        rem_balance = rem_balance + parseInt(arramount[i]);
        list.pop();
        alert('You dont have enough cash reserve  ');
      }
    }
  }
  console.log(list);

  return (
    <View style={styles.bodyContainer}>
      <View style={styles.listView}>
        <View style={styles.sizebox}></View>
        <Text style={styles.mainbalance}>Balance : {rem_balance}</Text>
        <View style={styles.scrool}>
          <View style={styles.cont}>
            <ScrollView>
              <View style={styles.sizebox}></View>
              {list
                ? list.reverse().map((item, index) => (
                    <View key={index}>
                      <Text style={styles.firsttext}>
                        Date : {'   '}
                        {item.datesday} - {item.datesmonth} -{item.datesyear}
                        {'          '}
                        Type : {item.type}
                      </Text>
                      <Text>
                        Amount : {'   '}
                        {arramount[index]}
                      </Text>
                      <Text style={styles.firsttext}>
                        Description :{'   '}
                        {item.description}
                      </Text>

                      <Text></Text>
                      <View style={styles.sizebox}></View>
                    </View>
                  ))
                : null}
            </ScrollView>
          </View>

          <View style={styles.sizebox}></View>
        </View>

        <View style={styles.buttonContainer}>
          {/* navigation to the input screen  */}
          <Buttons
            onPress={() => {
              navigation.navigate('Add Transcations');
            }}
          />
        </View>
      </View>
    </View>
  );
}

//Screen for taking input from users
function DetailsScreen({navigation, route}) {
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState(0);
  const [type, setType] = useState(0);
  // const [dates, setdate] = useState(0);

  return (
    <View style={styles.listView}>
      <View style={styles.scrool}>
        {/* selecting the mode of transcation debit or credit */}
        <Picker onValueChange={value => setType(value)}>
          <Picker.Item label="Select a Option" value="0"></Picker.Item>
          <Picker.Item label="Debit" value="Debit"></Picker.Item>
          <Picker.Item label="Credit" value="Credit"></Picker.Item>
        </Picker>
        {/* amount input box */}
        <Text style={styles.inputheading}>Amount</Text>
        <TextInput
          placeholder="Amount"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={value => setAmount(value)}
        />
        {/* input box for description */}
        <Text style={styles.inputheading}>Description </Text>
        <TextInput
          multiline
          placeholder="Description"
          style={styles.input}
          onChangeText={value => setDescription(value)}
        />
        <View style={styles.formbuttonwrap}>
          <TouchableOpacity
            style={styles.formbutton}
            // validation and navigation to home screen

            onPress={() => {
              if (amount != '' && description != '' && type != '') {
                navigation.navigate('Expense Tracker', {
                  amount: amount,
                  description: description,
                  type: type,
                  datesday: new Date().getDate().toLocaleString(),
                  datesmonth: new Date().getMonth().toLocaleString(),
                  datesyear: new Date().getFullYear().toLocaleString(),
                });
              } else if (isNaN(amount)) {
                alert('Please Enter Amount in Digits');
              } else {
                alert('Enter correct values');
              }
            }}>
            {/* save button  */}
            <Text style={styles.formbuttontext}> Save </Text>
          </TouchableOpacity>
          {/* clear button */}
          <TouchableOpacity style={styles.formbutton}>
            <Text style={styles.formbuttontext}> Clear </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

//stack navigation implementation

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 25,
            fontStyle: 'italic',
            fontWeight: 'bold',
          },
          headerTitleAlign: {
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}>
        <Stack.Screen name="Expense Tracker" component={HomeScreen} />
        <Stack.Screen name="Add Transcations" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
