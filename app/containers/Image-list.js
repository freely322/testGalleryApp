import React, {Component} from 'react';
import {StyleSheet, Text, View, RefreshControl, ScrollView, TouchableOpacity, Button} from 'react-native';
import {connect} from 'react-redux';
import SingleImage from "../components/single-image";
import {imagesFetch} from "../actions/imageListActions";

export class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Random photos',
            headerStyle: {
                backgroundColor: '#333333',
            },
            headerTintColor: '#fff',
        };
    };
    refreshImages(){
        this.setState({refreshing: true});
        this.props.dispatch(imagesFetch());
        this.setState({refreshing: false})
    };

    componentDidMount() {
        this.props.dispatch(imagesFetch());
    }

    render() {
        if (this.props.images.error) {
            return (<View>
                <Text>{this.props.images.error}</Text>
                <Button title={'Load new photos'} onPress={() => {this.props.dispatch(imagesFetch())}}/>
            </View>)
        } else if (this.props.images.loading === true) {
            return (
                <Text style={{textAlign: 'center'}}>Loading...</Text>
            )
        } else {
            let pics = this.props.images.images.map((pic) => {
                return (
                    <TouchableOpacity key={pic.id} onPress={() => {this.props.navigation.navigate('fullscreen', {
                        uri: pic.urls.regular,
                        title: pic.description,
                        color: pic.color
                    })}}>
                        <SingleImage
                            source={{uri: pic.urls.small}}
                            author={pic.user.name}
                        />
                    </TouchableOpacity>
                )
            });
            return (
                <ScrollView style={[styles.wrapper]} refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={()=>this.refreshImages()}/>} >
                    <View style={{flex: 1}}>
                        {pics}
                        <Button title={'Load new photos'} onPress={() => {this.props.dispatch(imagesFetch())}}/>
                    </View>
                </ScrollView>
            );
        }
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
});

export default connect((state) => {
    return {
        images: state.images
    }
})(ImageList)