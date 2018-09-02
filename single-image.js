import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,} from 'react-native';


export default class SingleImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[styles.wrapper]}>
                <Image
                    source={this.props.source}
                    style={[styles.thumb]}
                />
                <Text>
                    {this.props.author}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#dddddd',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#444444',
        flexDirection: 'row'
    },
    thumb: {
        width: 70,
        height: 70,
        marginRight: 30
    },
});