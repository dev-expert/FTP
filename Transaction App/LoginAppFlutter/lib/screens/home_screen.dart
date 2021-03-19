import 'package:flutter/material.dart';
import 'login_screen.dart';
import 'add_transactions.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:firebase_auth/firebase_auth.dart';

class HomeScreen extends StatefulWidget {
  static const routeName = '/home';
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class CrudMethods {
  //for showing data from firestore
  getData() async {
    return await FirebaseFirestore.instance
        .collection('First')
        .orderBy('time')
        .get();
  }
}

class _HomeScreenState extends State<HomeScreen> {
  QuerySnapshot showndata;
  CrudMethods crudObj = new CrudMethods();
  final auth = FirebaseAuth.instance;

  @override
  void initState() {
    crudObj.getData().then((result) {
      showndata = result;
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Screen'),
        automaticallyImplyLeading: false,
        actions: <Widget>[
          FlatButton(
            child: Row(
              children: <Widget>[Text('Log Out'), Icon(Icons.person)],
            ),
            textColor: Colors.white,
            onPressed: () {
              Widget cancelButton = FlatButton(
                child: Text("Cancel"),
                onPressed: () {
                  Navigator.of(context)
                      .pushReplacementNamed(HomeScreen.routeName);
                },
              );
              Widget continueButton = FlatButton(
                child: Text("Continue"),
                onPressed: () {
                  Navigator.of(context)
                      .pushReplacementNamed(LoginScreen.routeName);
                },
              );
              // set up the AlertDialog
              AlertDialog alert = AlertDialog(
                title: Text("Log Out"),
                content: Text("Are you sure you want to log out"),
                actions: [
                  cancelButton,
                  continueButton,
                ],
              );
              // show the dialog
              showDialog(
                context: context,
                builder: (BuildContext context) {
                  return alert;
                },
              );
            },
          )
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        onPressed: () {
          Navigator.of(context).pushReplacementNamed(AddTransactions.routeName);
        },
        icon: Icon(Icons.add),
        label: Text('Add Transcation'),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      body: _userList(),
    );
  }

  Widget _userList() {
    var balance = 0;

    if (showndata != null) {
      return ListView.builder(
        itemCount: showndata.docs.length,
        padding: EdgeInsets.all(15.0),
        itemBuilder: (context, i) {
          return new ListTile(
            title: Text(showndata.docs[i].data()['descriptionValue']),
            subtitle: Text('Amount : ' +
                showndata.docs[i].data()['amountValue'] +
                '\n' +
                'Transaction Type : ' +
                showndata.docs[i].data()['valueSelectedByUser']),
            leading: Text(showndata.docs[i].data()['day'] +
                '/' +
                showndata.docs[i].data()['month'] +
                '/' +
                showndata.docs[i].data()['year']),
            trailing: Text('Balance' + '\n 00000'),
          );
        },
      );
    } else {
      return Text('No Data');
    }
    // body: Column(children: <Widget>[
    //   Padding(
    //     padding: const EdgeInsets.all(8.0),
    //     child: Row(
    //       children: <Widget>[
    //         RaisedButton(
    //           child: Text('Add transactions'),
    //           onPressed: () {
    //             Navigator.of(context)
    //                 .pushReplacementNamed(AddTransactions.routeName);
    //           },
    //           shape: RoundedRectangleBorder(
    //             borderRadius: BorderRadius.circular(30),
    //           ),
    //           color: Colors.black87,
    //           textColor: Colors.white,
    //         )
    //       ],
    //     ),
    //   ),
    //   Padding(
    //     padding: const EdgeInsets.all(8.0),
    //     child: Text(
    //       "Balance Sheet",
    //       textScaleFactor: 2,
    //       style: TextStyle(fontWeight: FontWeight.bold),
    //     ),
    //   ),
    //   Padding(
    //       padding: const EdgeInsets.all(16.0),
    //       child: Container(
    //         _top(),
    //       )),
    // ]),
  }

  // BuildContext top() {
  //   Widget build(BuildContext context) {
  //     return StreamBuilder<QuerySnapshot>(
  //       stream: FirebaseFirestore.instance.collection("First").snapshots(),
  //       builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
  //         return new ListView(children: createChildren(snapshot));
  //       },
  //     );
  //   }

  // FirebaseFirestore.instance.collection("First").get().then((querySnapshot) {
  //   querySnapshot.docs.forEach((result) {
  //     FirebaseFirestore.instance
  //         .collection("First")
  //         .doc(result.id)
  //         .collection("pets")
  //         .get()
  //         .then((querySnapshot) {
  //       querySnapshot.docs.forEach((result) {
  //         print(result.data());
  //       });
  //     });
  //   });
  // });
  //}
}
