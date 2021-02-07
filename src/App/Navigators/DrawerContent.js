import React, { Component } from 'react';
import { StyleSheet, ScrollView  } from 'react-native';
import { Constants } from 'expo';
import { SafeAreaView } from 'react-navigation';
import { DrawerItems } from 'react-navigation-drawer';

const DrawerContent = (props) => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}
        >

            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    header: {
        fontSize: 18,
        fontWeight: '100',
        textAlign: 'left',
        marginStart: 16,
        marginBottom: 8,
    }
});

export default DrawerContent;