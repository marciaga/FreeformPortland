import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { setPlayerStatus } from '../actions';
import { AudioPlayer } from './audio-player';

const mapStateToProps = state => ({
    player: state.player
});

class Drawer extends React.Component {
    onPress = () => {
        const { player } = this.props;

        this.props.dispatch(setPlayerStatus(!player.isPlaying));
    }

    render() {
        const { player } = this.props;

        return (
            <View>
                <AudioPlayer
                    handlePress={this.onPress}
                    isPlaying={player.isPlaying}
                />
                <Text>{this.props.player.isPlaying.toString()}</Text>
                <TouchableOpacity onPress={this.onPress}>
                  <Text>Click Me</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(mapStateToProps)(Drawer)
