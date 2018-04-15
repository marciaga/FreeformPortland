import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container } from '../components/Container';

export const About = (props) => (
    <Container
        {...props}
        backgroundColor="#c95e0c"
        onPress={() => console.log('press')}
    />
);
