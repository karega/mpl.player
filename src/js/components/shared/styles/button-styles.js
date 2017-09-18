/* @flow */

import {StyleSheet} from 'react-native';

const buttonStyles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 6,
        minWidth: 75,
        borderRadius: 2
    }
});

const redTheme = StyleSheet.create({
    clearText: {
        color: '#ee0034'
    },
    clearButton: {
        backgroundColor: 'transparent',
        borderWidth: 0
    },
    borderedText: {
        color: '#ee0034'
    },
    borderedButton: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ee0034'
    },
    filledText: {
        color: '#ffffff'
    },
    filledButton: {
        borderWidth: 1,
        borderColor: '#ee0034',
        backgroundColor: '#ee0034'
    }
});

const greenTheme = StyleSheet.create({
    clearText: {
        color: '#009688'
    },
    clearButton: {
        backgroundColor: 'transparent',
        borderWidth: 0
    },
    borderedText: {
        color: '#009688'
    },
    borderedButton: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#009688'
    },
    filledText: {
        color: '#ffffff'
    },
    filledButton: {
        borderWidth: 1,
        borderColor: '#009688',
        backgroundColor: '#009688'
    }
});

export default {
    buttonStyles: buttonStyles,
    redTheme: redTheme,
    greenTheme: greenTheme
};