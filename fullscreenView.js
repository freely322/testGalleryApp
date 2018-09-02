import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';


export default class FullscreenView extends Component {
    constructor(props) {
        super(props)
    }
    static navigationOptions = ({ navigation }) => {
        let title = '';
        let setTitle = () => {
            if (navigation.getParam('title') !== '') {
                title = navigation.getParam('title')
            } else {
                title = 'Just a photo'
            }
        };
        setTitle();
        return {
            title: title,
            headerStyle: {
                backgroundColor: '#333333',
            },
            headerTintColor: '#fff',
        };
    };
    render() {
        const { navigation } = this.props;
        const uri = navigation.getParam('uri', 'https://images.unsplash.com/photo-1535412833400-85426926b8c1?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjMyNDU2fQ&s=5f22d400e082c8197425cd22cfa94479');
        return (
            <View style={[styles.fullscreen]}>
                <Image
                    resizeMode={'contain'}
                    source={{uri: uri}}
                    style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fullscreen: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#222222'
    },
});