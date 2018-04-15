import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '../components/Container';

export const Home = (props) => (
    <Container
        {...props}
        backgroundColor="#F44336"
        onPress={() => console.log('press')}
    />
);
