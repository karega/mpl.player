/* @flow */

import {StyleSheet} from 'react-native';

const tabsListStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#ebebeb'
    },
    scrollContainer: {

    },
    tab: {

    },
    card: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 66,
        marginBottom: 10,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 0
    },
    cardEditing: {
        backgroundColor: '#c7d1d6'
    },
    left: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    tabIconContainer: {
        alignItems: 'center',
        backgroundColor: '#63C0b8',
        borderColor: '#ff0000',
        borderRadius: 40,
        justifyContent: 'center',
        height: 40,
        width: 40
    },
    tabIconEditContainer: {
        alignSelf: 'flex-end'
    },
    tabIcon: {
        color: '#ffffff'
    },
    tabCaptionContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 12
    },
    tabCaption: {
        color: '#000000',
        fontWeight: 'bold',
        opacity: 0.59
    },
    tabContentNotImplemented: {
        height: 100,
        marginBottom: 10,
        marginLeft: 24,
        marginRight: 24,
        marginTop: 10
    }
});

export default tabsListStyles;
