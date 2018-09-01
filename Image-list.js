import React, {Component} from 'react';
import {StyleSheet, View, RefreshControl, ScrollView, TouchableOpacity} from 'react-native';
import SingleImage from "./single-image";


export default class ImageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            pictures: []
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
    _refreshListView(){
        console.log('meow');
        this.setState({refreshing: true});
        this.loadPictures();
        this.setState({refreshing: false})
    };
    loadPictures() {
        fetch('https://api.unsplash.com/photos/random?count=20&client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0').then((response) => {
            return response.json();
        }).then((data) => {
            let pictures = data.map((pic) => {
                return(
                    <TouchableOpacity key={pic.id} onPress={() => {this.props.navigation.navigate('fullScreen', {
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
            console.log(pictures);
            this.setState({pictures: pictures});
        }).catch(function (err) {
            console.log(err)
        });
    }
    componentDidMount() {
        this.loadPictures()
    }

    render() {
        let pics = this.state.pictures;
        return (
            <ScrollView style={[styles.wraper]} refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={()=>this._refreshListView()}/>} >
                <View style={{flex: 1}}>
                    {pics}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    wraper: {
        flex: 1,
        flexDirection: 'column',
    },
});