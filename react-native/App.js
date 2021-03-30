import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import style from './style';
import { Button, Text, View, Modal, Picker, TextInput, TouchableWithoutFeedback, Keyboard, Alert, ScrollView, TouchableOpacity, } from 'react-native';

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

    // Declaring Values
    var amount = this.state.Amount;
    var description = this.state.Description;
    var paymentGateway = this.state.paymentGateway;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var datemonthyear = month + '-' + date + '-' + year;

    // Validation
    if (amount == '' || description == '' || paymentGateway == '') {
        this.state.amount = '';
        this.state.description = '';
        this.state.paymentGateway = '';
        this.state.datemonthyear = '';
        alert('Please Enter The Following Details');
    }
    else if (isNaN(amount)) { //This will check if the Amount is Digits or Not
        this.state.amount = '';
        this.state.description = '';
        this.state.paymentGateway = '';
        this.state.datemonthyear = '';
        alert('Please Enter Amount in Digits');
    }
    // Credit - Debit
    else if (paymentGateway == 'Credit') {
      totalAmount = parseInt(totalAmount) + parseInt(amount);
      let myObj = {
        amount: amount,
        description: description,
        paymentGateway: paymentGateway,
        totalAmount: totalAmount,
        datemonthyear: datemonthyear,
      };
      let newArray = [...this.state.list, myObj];

        this.state.amount = '';
        this.state.description = '';
        this.state.paymentGateway = '';
        this.state.datemonthyear = '';

        this.setState({
          list: newArray,
        });

    } else if (paymentGateway == 'Debit') {
      if (amount > totalAmount) {
        alert('Insuffient Balance');
          this.state.amount = '';
          this.state.description = '';
          this.state.paymentGateway = '';
          this.state.datemonthyear = '';
      } else {
        totalAmount = parseInt(totalAmount) - parseInt(amount);
        let myObj = {
          amount: amount,
          description: description,
          paymentGateway: paymentGateway,
          totalAmount: totalAmount,
          datemonthyear: datemonthyear,
        };
        let newArray = [...this.state.list, myObj];

          this.state.amount = '';
          this.state.description = '';
          this.state.paymentGateway = '';
          this.state.datemonthyear = '';

          this.setState({
            list: newArray,
          });
      }
    }
  };

  render() {
    return (
      <View style={style.page}>
        <View style={style.head}>
          <Text style={style.headText}>View{"\n"}Transaction</Text>
        </View>
        <KeyboardAwareScrollView>
          <ScrollView style={style.body}>
            <View style={style.outputWrapper}>
              {this.state.list
                ? this.state.list.reverse().map((myObj, index) => (
                  <View key={index}>
                    <Text style={style.outputTextDes}>
                      {myObj.description}
                    </Text>
                    <Text style={style.outputTextDate}>
                      {myObj.datemonthyear}
                      &nbsp;&nbsp;
                      Type - {myObj.paymentGateway}
                      &nbsp;&nbsp;
                      Rs.{myObj.amount}
                    </Text>

                    <Text style={style.outputTextBlc}>
                      Balance{"\n"}Rs. {myObj.totalAmount}
                    </Text>
                  </View>
                ))
                : null}
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
        <TouchableOpacity
          onPress={() => {
            this.setState({ show: true });
          }}
          style={style.button}>
          <Text>+ Add Transaction</Text>
        </TouchableOpacity>

        <Modal transparent={true} visible={this.state.show}>
          <KeyboardAwareScrollView>
            <View style={style.alertBox}>
              <View style={style.head}>
                <Text style={style.headText}>Enter{"\n"}Details</Text>
              </View>

              <Picker style={style.alertBoxOptionText}
                onValueChange={paymentGateway =>
                  this.setState({ paymentGateway })
                }>
                <Picker.Item label="Select a Option" value="0"></Picker.Item>
                <Picker.Item label="Debit" value="Debit"></Picker.Item>
                <Picker.Item label="Credit" value="Credit"></Picker.Item>
              </Picker>

              <View style={style.amountWrapper}>
                <TextInput
                  placeholder='Enter Amount'
                  style={style.input}
                  onChangeText={Amount => this.setState({ Amount })}
                />
              </View>

              <View style={style.descriptionWrapper}>
                <TextInput
                  placeholder='Enter Transaction Description'
                  style={style.input}
                  onChangeText={Description => this.setState({ Description })}
                />
              </View>


              <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: '30%', }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setValues(), this.setState({ show: false });
                  }}
                  style={style.confirmButton}>
                  <Text>Confirm</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.setState({ show: false });
                  }}
                  style={style.confirmButton}>
                  <Text>Back</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </Modal>
      </View>
    );
  }
}

export default App;
