import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Drawer from './drawer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '500',
  },
});

export const Container = ({ backgroundColor, onPress, children, ...rest }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={[styles.container, { backgroundColor }]}>
                <TouchableOpacity onPress={onPress}>
                  <Text style={styles.text}>{backgroundColor}</Text>
                </TouchableOpacity>
                {children}
            </View>
            <Drawer {...rest} />
        </View>
    )
};
