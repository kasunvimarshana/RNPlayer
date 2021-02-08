import React, { Component } from 'react';
import { 
    View,
    SafeAreaView,
    ScrollView,
    StyleSheet, 
    ImageBackground,
    Image,
    TouchableOpacity,
    StatusBar 
} from 'react-native';

import { 
    Colors,
    Text,
    Card, 
    Title, 
    Paragraph,
    Headline,
    TextInput,
    List,
    Button,
    ActivityIndicator
 } from 'react-native-paper';
 import { FontAwesome } from '@expo/vector-icons';

const ListItem = ({ item, onPress, style }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
            <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    item: {
        flex: 1,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default ListItem;