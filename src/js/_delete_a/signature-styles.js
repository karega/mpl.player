/* signature-styles.js */

import { StyleSheet } from 'react-native';

const SignatureStyles = StyleSheet.create(
    {
        container : {
            flexDirection : "column" ,
        } ,
        buttonsContainer : {
            flexDirection : "row" ,
            justifyContent : "space-around" ,
            marginTop : 16 ,
        } ,
        signaturesContainer : {
            flexDirection : "row" ,
            height : 365 ,
        } ,
        captureContainer : {
            flexDirection : "column" ,
        } ,
        signatureTitle : {
            fontWeight : "bold" ,
            textAlign : "center" ,
        } ,
        signatureCapture : {
            width : 156 ,
            height : 360 ,
            padding : 1 ,
            borderWidth : 1 ,
            borderColor : "#999999" ,
        } ,
        signatureImage : {
            width : 156 ,
            height : 360 ,
            borderWidth : 1 ,
            borderColor : "#999999" ,
        } ,
    }
);

export default SignatureStyles;
