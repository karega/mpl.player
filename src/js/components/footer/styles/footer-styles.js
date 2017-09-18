/* @flow */

import {StyleSheet} from 'react-native';

const footerStyles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 8
    },
    button: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    buttonIcon: {
        color: '#000000',
        opacity: 0.59
    },
    buttonText: {
        color: '#000000',
        fontSize: 12,
        opacity: 0.59
    }
});

export default footerStyles;
