import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    page: {
        height: '100%',
        width: '100%',
        backgroundColor: '#c5d6d9',
    },

    head: {
        backgroundColor: '#3f4c4d',
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
    },

    headText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#ffffff',
        marginTop: 10,
        marginLeft: 25,
    },

    body: {
        width: '100%',
        height: '80%',
        backgroundColor: '#ebf0ef',
        borderRadius: 10,
    },

    outputTextDes: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: '30%',
    },

    outputTextDate: {
        fontSize: 14,
    },

    outputTextBlc: {
        fontSize: 20,
        textAlign: 'right',
        marginRight: 20,
    },

    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        height: 50,
        marginTop: 10,
        marginBottom: 10,
    },

    amountWrapper: {
        width: '80%',
        alignSelf: 'center',
        marginBottom: '5%',
    },

    descriptionWrapper: {
        width: '80%',
        alignSelf: 'center'
    },

    alertBox: {
        backgroundColor: '#c5d6d9',
        height: '100%',
        borderRadius: 20,
        flex: 1,
    },

    alertBoxOptionText: {
        width: '80%',
        alignSelf: 'center',
        marginTop: '30%',
        marginBottom: '10%',
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal: '10%',
        height: 50,
        width: 200,
        borderWidth: 1,
        borderRadius: 20,
        color: '#ffffff',
        backgroundColor: '#ffffff'
    },

    confirmButton: {
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal: '10%',
        height: 50,
        width: 100,
        borderWidth: 1,
        borderRadius: 20,
        color: '#ffffff',
        backgroundColor: '#ffffff'
    },

})