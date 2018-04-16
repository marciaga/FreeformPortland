import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { setPlayerStatus } from '../actions';

const mapStateToProps = state => ({
    player: state.player
});

class Drawer extends React.Component {
    onPress = () => {
        const { player } = this.props;

        this.props.dispatch(setPlayerStatus(!player.isPlaying));
    }

    render() {
        return (
            <View>
                <Text>{this.props.player.isPlaying.toString()}</Text>
                <TouchableOpacity onPress={this.onPress}>
                  <Text>Click Me</Text>
                </TouchableOpacity>
                <Text>Drawer!</Text>
                <Text>Drawer!</Text>
                <Text>Drawer!</Text>
            </View>
        );
    }
}

export default connect(mapStateToProps)(Drawer)
