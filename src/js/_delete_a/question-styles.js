/* question-styles.js */

import { StyleSheet } from 'react-native';

const QuestionStyles = StyleSheet.create(
    {
        checkbox : {
            marginRight : 24 ,
        } ,
        itemImage : {
            height : 80 ,
            width : 80 ,
        } ,
        checklistImage : {
            width : 40 ,
            height : 40 ,
        } ,
        imageContainer : {
            marginBottom : 24 ,
        } ,
        images : {
            alignItems : "flex-start" ,
            flex : 1 ,
            flexDirection : "row" ,
            flexWrap : "wrap" ,
            justifyContent : "flex-start" ,
            marginTop: 10 ,
        } ,
        answers : {
            flexDirection : "row" ,
            justifyContent : "flex-start" ,
            alignItems : "flex-start" ,
            marginTop : 10 ,
            marginBottom : 30 ,
        } ,
    } ,
);

export default QuestionStyles;
