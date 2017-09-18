/* @flow */
import {StyleSheet} from 'react-native';

const ckbStyles = StyleSheet.create({
    base: {
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#777777',
        borderRadius: 3,
        height: 40,
        justifyContent: 'center',
        width: 62
    },
    selected: {
        backgroundColor: "#3b9890",
        borderColor: "#3b9890"
    },
    unselected: {
        backgroundColor: 'transparent'
    },
    icon: {
        color: '#ffffff'
    }
});

export default ckbStyles;
