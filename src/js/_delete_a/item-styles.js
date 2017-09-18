/* item-styles.js */

import { StyleSheet } from 'react-native';

const ItemStyles = StyleSheet.create(
    {
        item : {
            alignItems : "flex-start" ,
            flex : 1,
            flexDirection : "column" ,
            justifyContent : "flex-start" ,
            marginBottom : 24 ,
        } ,
        items : {
            alignItems : "flex-start" ,
            flex : 1 ,
            flexDirection : "row" ,
            justifyContent : "flex-start" ,
            marginTop : 0 ,
            marginBottom : 8 ,
        } ,
        answers : {
            alignItems : "flex-start" ,
            flexDirection : "row" ,
            justifyContent : "flex-start" ,
        } ,
        itemName : {
            alignItems : "flex-start" ,
            justifyContent : "flex-start" ,
            flex : 1 ,
            flexDirection : "column" ,
            flexWrap : "wrap" ,
        } ,
        itemLabel : {
            fontSize : 14 ,
            fontWeight : "bold" ,
            marginRight : 10 ,
        } ,
        itemId : {
            marginRight : 24 ,
        } ,
        checkbutton : {
            marginRight : 24 ,
        } ,
    }
);

export default ItemStyles;
