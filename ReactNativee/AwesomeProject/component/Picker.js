import React, {Component} from 'react';
import {View, Picker} from 'react-native';

export default class PickerEx extends Component{
    render(){
        return(
            <View>
                <Picker>
                    <Picker.Item label="Slect a Option" value="0"></Picker.Item>
                    <Picker.Item label="React" value="8000"></Picker.Item>
                    <Picker.Item label="PHP" value="7000"></Picker.Item>
                    <Picker.Item label="HTML" value="6000"></Picker.Item>


                </Picker>
            </View>
        )
    }
}