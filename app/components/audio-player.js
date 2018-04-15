import Video from 'react-native-video';

const uri = 'http://listen.xray.fm:8000/stream.m3u';

export const AudioPlayer = () => (
    <Video
        source={{ uri }}
        onLoadStart={(e) => { console.log('load start fired'); console.log(e)}}
        onLoad={(e) => { console.log('load fired')}}
    />
);
