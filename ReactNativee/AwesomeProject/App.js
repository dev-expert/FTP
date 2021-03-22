/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet,Button, Text, View, Modal, Picker, TextInput, TouchableWithoutFeedback , Keyboard} from 'react-native';
import * as firebaseobj from 'firebase';
import {firebaseConfig} from './config';


if(!firebaseobj.apps.length) {
  firebaseobj.initializeApp(firebaseConfig);
}

var totalAmount=0;
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      show: false,
      Amount: '',
      Description: '',
      paymentGateway: ''
    };
  }

  F1 = ()=>{
    var amount=this.state.Amount;
    var description=this.state.Description;
    var paymentGateway=this.state.paymentGateway;
    if(paymentGateway == 'Credit'){
      totalAmount=parseInt(totalAmount) + parseInt(amount);
    }
    else if(paymentGateway == 'Debit')
    {
      totalAmount = parseInt(totalAmount) - parseInt(amount);
    }
    // alert("Amount: Rs."+amount+" Description: "+description+"Payment Gateway: "+paymentGateway+"Amount"+totalAmount);
    
    // alert(description);
    // alert(this.props);
    const dept = firebaseobj.database().ref("details");
    dept.set({
      amount:amount,
      description:description,
      paymentgateway:paymentGateway,
      totalamount:totalAmount
    });
  }

  render(){

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: "green", height: "20%", width:"100%",justifyContent:"center", alignItems:"center"}}>
      
        <Text style={{fontSize: 35,color: '#FFF'}}>Transaction Tracker</Text>
        
      </View>
      <View style={styles.outputWrapper}>
      <Text style={styles.outputText}>Amount - Rs.{this.state.Amount}</Text>
      <Text style={styles.outputText}>Description - {this.state.Description}</Text>
      <Text style={styles.outputText}>Payment Gateway - {this.state.paymentGateway}</Text>
      <Text style={styles.outputText}>Balance - {totalAmount}</Text>
      </View>

    
      <Modal 
      transparent={true}
      visible={this.state.show}
      >
        <TouchableWithoutFeedback onPress={() =>{
            Keyboard.dismiss();
            // console.log("Dismissed Keyboard");
          }}>

        <View style={{backgroundColor: '#000000aa', flex: 1}}>
          <View style={{backgroundColor: '#ffffff',margin: 40, padding: 40, borderRadius: 10, flex: 1}}>
          <Text style={{fontSize: 30}}>Enter Details</Text>

          <Picker onValueChange={(paymentGateway) => this.setState({paymentGateway})} >
              <Picker.Item label="Select a Option" value="0"></Picker.Item>
              <Picker.Item label="Debit" value="Debit"></Picker.Item>
              <Picker.Item label="Credit" value="Credit"></Picker.Item>
          </Picker>

          
          

          <View style={styles.amountWrapper}>
            <Text>Enter Amount</Text>
            <TextInput style={styles.input} onChangeText={Amount=>this.setState({Amount})} />
          </View>

          <View style={styles.descriptionWrapper}>
            <Text>Description</Text>
            <TextInput style={styles.input} onChangeText={Description=>this.setState({Description})} />
          </View>
         
          
      <Button title= "Confirm" onPress={()=>{this.F1(),this.setState({show:false})}} />
          </View>
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      <View style={styles.outerWrapper}>


        <View style={styles.addWrapper}>
        <Button color="red" title= "+" onPress={()=>{this.setState({show:true})}} style={styles.addText} />
        {/* <Text style={styles.addText}>+</Text> */}
        </View>
  
      </View>



    </View>

  );
  }
  
}

const styles = StyleSheet.create({


  container: {
    flex:1,
    backgroundColor: '#E8EAED',
  },

  outputWrapper: {
    margin: 10
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
    marginTop: 10
  },


  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    height:50,
    width: 230,
    marginTop: 10,
    marginBottom: 10
  },
  
  addWrapper:{
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    backgroundColor: '#FFF',
  },

  
  addText:{}
})
export default App;
