/* header-styles.js */

import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create(
    {
        header : {
            flexDirection : "row" ,
            height : 50 ,
            backgroundColor : "#404040" ,
        } ,
        debugHeader : {
            flexDirection : "column" ,
            backgroundColor : "#404040" ,
        } ,
        logo : {
            alignItems : "center" ,
            backgroundColor : "#ee0034" ,
            justifyContent : "flex-end" ,
            marginLeft : 16 ,
            paddingBottom : 8 ,
            width : 50 ,
        } ,
        companyName : {
            color : "#ffffff" ,
        } ,
        app : {
            alignItems : "flex-end" ,
            flexDirection : "row" ,
            justifyContent : "flex-start" ,
            paddingBottom : 8 ,
            paddingLeft : 8 ,
        } ,
        appName : {
            color : "#ffffff" ,
            fontSize : 16 ,
        } ,
    } ,
);

export default HeaderStyles;
