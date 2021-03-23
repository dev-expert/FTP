//importing components from react and react native
import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Picker,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Divider} from 'react-native-elements';

//components

import Buttons from './components/Button';

//styling part of components
import styles from './components/homeStylesheet';

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
      // datesmonth,
      // datesyear,
    } = route.params;
    let item = {
      amount: amount,
      description: description,
      type: type,
      datesday: datesday,
      // datesmonth: parseInt(datesmonth) + 1,
      // datesyear: datesyear,
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
                ? list.map((item, index) => (
                    <View key={index}>
                      <Text style={styles.firsttext}>
                        Date : {'   '}
                        {item.datesday}
                        {'         '}
                        {/* - {item.datesmonth} -{item.datesyear}
                        {'          '} */}
                        Type : {item.type}
                      </Text>
                      <Text style={styles.firsttext}>
                        Amount : {'   '}
                        {item.amount}
                      </Text>
                      <Text style={styles.firsttext}>
                        Description :{'   '}
                        {item.description}
                      </Text>

                      <View style={styles.sizebox}></View>
                      <Divider style={{backgroundColor: 'black'}} />
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
  const [datesday, setDate] = useState(datemonthyear);

  var date = new Date().getDate().toLocaleString();
  var month = new Date().getMonth().toLocaleString();
  var year = new Date().getFullYear().toLocaleString();

  var datemonthyear = (date + '-' + month + '-' + year).toLocaleString();

  if (!datesday) {
    setDate(datemonthyear);
  }

  console.log('date--month year-', datesday);

  return (
    <View style={styles.listView}>
      <View style={styles.scrool}>
        {/* selecting the mode of transcation debit or credit */}
        <View style={styles.pickeritem}>
          <Picker onValueChange={value => setType(value)}>
            <Picker.Item label="Select a Option" value="0"></Picker.Item>
            <Picker.Item label="Debit" value="Debit"></Picker.Item>
            <Picker.Item label="Credit" value="Credit"></Picker.Item>
          </Picker>
        </View>
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
                if (amount > 0) {
                  navigation.navigate('Expense Tracker', {
                    amount: amount,
                    description: description,
                    type: type,
                    datesday: datesday,
                  });
                } else {
                  alert('you can not enter 0 ');
                }
              } else if (amount == '' && description == '' && type == '') {
                alert('Enter all the details');
              } else if (amount == '' && description == '') {
                alert('Enter amount and description');
              } else if (amount == '' && type == '') {
                alert('Enter amount and type ');
              } else if (description == '' && type == '') {
                alert('Enter Description and type ');
              } else {
                alert('Select the type of transcation');
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
