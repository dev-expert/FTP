import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:login_app/screens/home_screen.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class AddTransactions extends StatefulWidget {
  static const routeName = '/add';
  //const AddTransactions({Key? key}) : super(key: key);
  @override
  _AddTransactionsState createState() => _AddTransactionsState();
}

class _AddTransactionsState extends State<AddTransactions> {
  TextEditingController _nameController, _numberController;
  //DatabaseReference _ref;
  String dropdownValue = 'Credit';
  @override
  void initState() {
    // ignore: todo
    // TODO: implement initState
    super.initState();
    _nameController = TextEditingController();
    _numberController = TextEditingController();
    //_ref = FirebaseDatabase.instance.reference();
    //var firestoreInstance = FirebaseFirestore.instance;
  }

  void _add() async {
    String desc = _nameController.text;
    String amount = _numberController.text;

    // Map<String, String> data = {
    //   'desc': desc,
    //   'amount': amount,
    //   'type': _typeSelected,
    // };

    Map<String, dynamic> data = {
      'time': DateTime.now().toUtc(),
      'day': DateTime.now().day.toString(),
      'month': DateTime.now().month.toString(),
      'year': DateTime.now().year.toString(),
      'amountValue': amount,
      'descriptionValue': desc,
      'valueSelectedByUser': dropdownValue,
    };
    await Firebase.initializeApp();
    FirebaseFirestore.instance.collection("First").add(data).then((value) {
      if (amount == "" || desc == "") {
        Widget okButton = FlatButton(
          child: Text("OK"),
          onPressed: () {
            Navigator.of(context)
                .pushReplacementNamed(AddTransactions.routeName);
          },
        );
        // set up the AlertDialog
        AlertDialog alert = AlertDialog(
          content: Text("Kindly Add appropriate values"),
          actions: [
            okButton,
          ],
        );
        // show the dialog
        showDialog(
          context: context,
          builder: (BuildContext context) {
            return alert;
          },
        );
      } else {
        // set up the button
        Widget okButton = FlatButton(
          child: Text("OK"),
          onPressed: () {
            Navigator.of(context).pushReplacementNamed(HomeScreen.routeName);
          },
        );
        // set up the AlertDialog
        AlertDialog alert = AlertDialog(
          content: Text("Transaction Added Successfully"),
          actions: [
            okButton,
          ],
        );
        // show the dialog
        showDialog(
          context: context,
          builder: (BuildContext context) {
            return alert;
          },
        );
      }
    });

    // _ref.push().set(data).then((value) {
    //   Navigator.pop(context);
    // });
  }

  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Add Transaction'),
        automaticallyImplyLeading: false,
        actions: <Widget>[
          FlatButton(
            child: Row(
              children: <Widget>[Text('Back'), Icon(Icons.repeat_rounded)],
            ),
            textColor: Colors.white,
            onPressed: () {
              Navigator.of(context).pushReplacementNamed(HomeScreen.routeName);
            },
          )
        ],
      ),
      body: Stack(
        children: <Widget>[
          Container(
            decoration: BoxDecoration(
              color: Colors.black26,
            ),
          ),
          Center(
            child: Card(
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(10.0),
              ),
              child: FractionallySizedBox(
                widthFactor: 0.90,
                heightFactor: 0.90,
                child: Form(
                  child: SingleChildScrollView(
                    child: Column(
                      children: <Widget>[
                        //Top Text
                        Container(
                          padding: EdgeInsets.all(16),
                          child: Text(
                            'New Transaction',
                            style: TextStyle(
                              fontSize: 35.0,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                        //Transaction Type
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: <Widget>[
                            Container(
                              padding: EdgeInsets.all(16),
                              child: Text(
                                'Transaction Type',
                                style: TextStyle(
                                  fontSize: 20.0,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ),
                            DropdownButton<String>(
                              value: dropdownValue,
                              elevation: 16,
                              style: const TextStyle(
                                  color: Colors.black, fontSize: 25),
                              underline: Container(
                                height: 3,
                                width: 25.0,
                                color: Colors.black12,
                              ),
                              onChanged: (String newValue) {
                                setState(() {
                                  dropdownValue = newValue;
                                });
                              },
                              items: <String>['Credit', 'Debit']
                                  .map<DropdownMenuItem<String>>(
                                (String value) {
                                  return DropdownMenuItem<String>(
                                    value: value,
                                    child: Text(value),
                                  );
                                },
                              ).toList(),
                            ),
                          ],
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: <Widget>[
                            Container(
                              padding: EdgeInsets.all(16),
                              child: Text(
                                'Amount',
                                style: TextStyle(
                                  fontSize: 20.0,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ),
                          ],
                        ),
                        Container(
                          width: 300.0,
                          child: TextFormField(
                            controller: _numberController,
                            decoration: InputDecoration(
                              labelText: 'In Rupees',
                              contentPadding:
                                  EdgeInsets.fromLTRB(20.0, 0, 0, 0),
                            ),
                            keyboardType: TextInputType.number,
                            validator: (value) {
                              if (value.isEmpty) {
                                return 'invalid amount';
                              }
                              return null;
                            },
                          ),
                        ),
                        Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: <Widget>[
                            Container(
                              padding: EdgeInsets.all(16),
                              child: Text(
                                'Description',
                                style: TextStyle(
                                  fontSize: 20.0,
                                  fontWeight: FontWeight.bold,
                                ),
                              ),
                            ),
                          ],
                        ),
                        Container(
                          width: 300.0,
                          child: TextFormField(
                            controller: _nameController,
                            decoration: InputDecoration(
                              labelText: 'Short Description',
                              contentPadding:
                                  EdgeInsets.fromLTRB(20.0, 0, 0, 0),
                            ),
                            validator: (value) {
                              if (value.isEmpty) {
                                return 'invalid description';
                              }
                              return null;
                            },
                          ),
                        ),
                        SizedBox(
                          height: 30,
                        ),
                        RaisedButton(
                          child: Text('Add'),
                          onPressed: () {
                            _add();
                          },
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(30),
                          ),
                          color: Colors.black87,
                          textColor: Colors.white,
                        )
                      ],
                    ),
                  ),
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
