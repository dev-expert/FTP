import React, {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import io from 'socket.io-client';

export default function App() {
  const [chatMessage, setchatMessage] = useState('');
  let socket = io('http://192.168.1.118:3001');

  //given  blank [] as second argument to avoid the rerender of this every time

  function submitchatMessage() {
    debugger;
    console.log('on submitchgat fun');
    debugger;
    socket.emit('chat message : ' + socket);
    setchatMessage('');
    debugger;
  }

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        style={{
          height: 40,
          width: '70%',
          borderWidth: 4,
          borderRadius: 20,
          margin: 10,
        }}
        value={chatMessage}
        autoCorrect={false}
        onSubmitEditing={() => submitchatMessage()}
        onChangeText={chatMessage => {
          setchatMessage(chatMessage);
        }}></TextInput>
    </View>
  );
}

// import React, {Component, useEffect, useState} from 'react';
// import {Text, View, TextInput, StyleSheet, ScrollView} from 'react-native';
// import io from 'socket.io-client';

// const styles = StyleSheet.create({
//   container: {
//     margin: 20,

//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
// });

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       chatMessage: '',
//       chatMessages: [],
//     };
//   }

//   componentDidMount() {
//     this.socket = io('http://192.168.1.118:3001');
//     this.socket.on('chat message', msg => {
//       this.setState({chatMessages: [...this.state.chatMessages, msg]});
//     });
//   }

//   submitChatMessage() {
//     this.socket.emit('chat message', this.state.chatMessage);
//     this.setState({chatMessage: ''});
//   }

//   render() {
//     const chatMessages = this.state.chatMessages.map(chatMessage => (
//       <Text
//         style={{
//           fontSize: 40,
//           fontStyle: 'italic',
//           borderWidth: 2,
//           margin: 5,
//           borderRadius: 10,
//         }}>
//         {'    ' + chatMessage}
//       </Text>
//     ));

//     return (
//       <View style={styles.container}>
//         <View
//           style={{
//             height: '70%',
//             borderRadius: 20,
//             borderWidth: 1,
//             backgroundColor: 'yellow',
//           }}>
//           <ScrollView>{chatMessages}</ScrollView>
//         </View>
//         <TextInput
//           style={{height: 40, borderWidth: 2, borderRadius: 20, marginTop: 20}}
//           autoCorrect={false}
//           value={this.state.chatMessage}
//           onSubmitEditing={() => this.submitChatMessage()}
//           onChangeText={chatMessage => {
//             this.setState({chatMessage});
//           }}
//         />
//       </View>
//     );
//   }
// }
