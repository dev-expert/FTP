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
      super.initState();
    });
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
          // Navigator.push(
          //   context,
          //   MaterialPageRoute(builder: (context) => AddTransactions()),
          // );
          Navigator.push(context, MaterialPageRoute(builder: (context) {
            return AddTransactions();
          }));

          //Navigator.of(context).pushReplacementNamed(AddTransactions.routeName);
        },
        icon: Icon(Icons.add),
        label: Text('Add Transcation'),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      body: (Container(
        // color: Colors.black12,
        margin: EdgeInsets.fromLTRB(0, 0, 0, 80),
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(25), color: Colors.black12),
        child: _userList(),
      )),
    );
  }

  Widget _userList() {
    int balance = 0;
    if (showndata != null) {
      return ListView.builder(
        itemCount: showndata.docs.length,
        padding: EdgeInsets.all(15.0),
        itemBuilder: (context, i) {
          if (showndata.docs[i].data()['valueSelectedByUser'] == "Credit") {
            balance =
                balance + int.parse(showndata.docs[i].data()['amountValue']);
          } else {
            balance =
                balance - int.parse(showndata.docs[i].data()['amountValue']);
          }

          String strbal = balance.toString();

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
            trailing: Text('Balance' + '\n' + strbal),
          );
        },
      );
    } else {
      return Text('');
    }
  }
}
