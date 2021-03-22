import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  View,
  Modal,
  Picker,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
} from 'react-native';

var totalAmount = 0;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      Amount: '',
      Description: '',
      paymentGateway: '',
      datemonthyear: '',
      list: [],
    };
  }



  setValues = () => {

// Setting the values.....................................................................................

    var amount = this.state.Amount;
    var description = this.state.Description;
    var paymentGateway = this.state.paymentGateway;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var datemonthyear = date + '-' + month + '-' + year;
// .......................................................................................................


// Checking the Validations...............................................................................

    if (amount == '' || description == '' || paymentGateway == '') {
      alert('Please Enter The Following Details');
      amount='';
      description='';
      paymentGateway='';
      return;
    }
    if (isNaN(amount)) {
      alert('Please Enter Amount in Digits');
      return;
    }

// .........................................................................................................

    if (paymentGateway == 'Credit') {
      totalAmount = parseInt(totalAmount) + parseInt(amount);
    } else if (paymentGateway == 'Debit') {
      if (amount > totalAmount) {
        alert('Insuffient Balance');
        return;
      } else {
        totalAmount = parseInt(totalAmount) - parseInt(amount);
      }
    }

    let myObj = {
      amount: amount,
      description: description,
      paymentGateway: paymentGateway,
      totalAmount: totalAmount,
      datemonthyear: datemonthyear,
    };

    let newArray = [...this.state.list, myObj];

    this.setState({
      list: newArray,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: 'green',
            height: '20%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 35, color: '#FFF'}}>Transaction Tracker</Text>
        </View>
        <ScrollView>
          <View>

{/* ..................................Traversing and Printing the Values using List.................................. */}

            <View style={styles.outputWrapper}>
              {this.state.list
                ? this.state.list.reverse().map((myObj, index) => (
                    <View key={index}>
                      <Text style={styles.outputText}>
                        Amount - Rs.{myObj.amount}
                      </Text>
                      <Text style={styles.outputText}>
                        Description - {myObj.description}
                      </Text>
                      <Text style={styles.outputText}>
                        Payment Gateway - {myObj.paymentGateway}
                      </Text>
                      <Text style={styles.outputText}>
                        Balance - {myObj.totalAmount}
                      </Text>
                      <Text style={styles.outputText}>
                        Date - {myObj.datemonthyear}
                      </Text>
                      <View
                        style={{
                          borderBottomColor: 'black',
                          borderBottomWidth: 1,
                        }}
                      />
                    </View>
                  ))
                : null}
            </View>

{/* ............................................................................................................. */}

          </View>
        </ScrollView>
        <Modal transparent={true} visible={this.state.show}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}>
            <View style={{backgroundColor: '#000000aa', flex: 1}}>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  margin: 40,
                  padding: 40,
                  borderRadius: 10,
                  flex: 1,
                }}>
                <Text style={{fontSize: 30}}>Enter Details</Text>

                <Picker
                  onValueChange={paymentGateway =>
                    this.setState({paymentGateway})
                  }>
                  <Picker.Item label="Select a Option" value="0"></Picker.Item>
                  <Picker.Item label="Debit" value="Debit"></Picker.Item>
                  <Picker.Item label="Credit" value="Credit"></Picker.Item>
                </Picker>

                <View style={styles.amountWrapper}>
                  <Text>Enter Amount</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={Amount => this.setState({Amount})}
                  />
                </View>

                <View style={styles.descriptionWrapper}>
                  <Text>Description</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={Description => this.setState({Description})}
                  />
                </View>

                <Button
                  title="Confirm"
                  onPress={() => {
                    this.setValues(), this.setState({show: false});
                  }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <View style={styles.outerWrapper}>
          <View style={styles.addWrapper}>
            <Button
              color="red"
              title="+"
              onPress={() => {
                this.setState({show: true});
              }}
              style={styles.addText}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  outputWrapper: {
    margin: 10,
  },

  outputText: {
    fontSize: 19,
  },

  outerWrapper: {
    position: 'absolute',
    bottom: 5,
    width: '100%',

    alignItems: 'center',
  },

  amountWrapper: {
    marginTop: 10,
  },

  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    height: 50,
    width: 230,
    marginTop: 10,
    marginBottom: 10,
  },

  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    backgroundColor: '#FFF',
  },

  addText: {},
});
export default App;
