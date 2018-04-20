import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import Video from 'react-native-video';
import { setPlayerStatus } from '../actions';

const uri = 'http://listen.freeformportland.org:8000/stream.m3u';

class AudioPlayer extends React.Component {
    render() {
        const { isPlaying, handlePress } = this.props;
        const iconName = !isPlaying ? 'play' : 'stop';

        return (
            <View>
                <TouchableOpacity onPress={handlePress}>
                    <Icon type="FontAwesome" name={iconName} />
                </TouchableOpacity>
                <Video
                    paused={!isPlaying}
                    source={{ uri }}
                    onLoadStart={(e) => { console.log('load start fired'); console.log(e)}}
                    onLoad={(e) => { console.log('load fired')}}
                />
            </View>
        );
    }
};

export { AudioPlayer };
