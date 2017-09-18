/* @flow */

import { StyleSheet } from 'react-native';

const ModalStyles = StyleSheet.create(
    {
        modal : {
            alignItems : 'stretch' ,
            backgroundColor : '#ffffff' ,
            borderRadius : 2 ,
            flex : 1 ,
            flexDirection : 'column' ,
            justifyContent : 'flex-start' ,
            marginLeft : 30 ,
            marginRight : 30 ,
            marginTop : 60 ,
            marginBottom : 60 ,
            paddingTop : 30 ,
            paddingLeft : 20 ,
            paddingRight : 20 ,
            paddingBottom : 10 ,
            zIndex : 1 ,
        } ,
        title : {
            fontSize : 16 ,
            fontWeight : 'bold' ,
        } ,
        text : {
            marginTop : 8 ,
            paddingLeft : 16 ,
            paddingRight : 16 ,
        } ,
        buttonContainer : {
            marginTop : 24 ,
            flexDirection : 'column' ,
            justifyContent : 'flex-end' ,
        } ,
        buttonSpacing : {
            marginTop : 16 ,
        } ,

    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    page: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        flex: 1,
        zIndex: 0,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    scrollContainer: {
		backgroundColor: '#F8F8F8',
    },
    content: {
        marginTop: 15
    },
    itemName: {
        color: '#000000'
    },
    itemSku: {
        color: '#555555'
    },
    textHeight: {
        lineHeight: 24
    },
    radioGroup: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default ModalStyles;
