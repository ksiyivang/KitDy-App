
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Icons } from './../../src/icon/icons';
import { Primary_Style } from '../../src/font/styles';
import { Local_Style } from '../../src/styles/localStyle/style_loadingScreen/style'
import { Gobal_Style } from '../../src/styles/gobalStyle/style'
import { StackActions, NavigationActions } from 'react-navigation';


const autoToLogin = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'loginScreen' })],
});

export default class LoadingScreen extends React.Component {
    componentDidMount = () => {
        this.getData();
    }
    render() {
        return (
            <View style={Local_Style.CONTAINER_VIEW_LOADING}>
                <View style={Local_Style.CONTAINER_VIEW_IMAGE}>
                    <View>
                        <Image source={Icons.icon_logo} />
                    </View>
                    <View style={Gobal_Style.CONTAINER_PADDING_TOP}>
                        <Text style={Primary_Style.PRIMARY_FONT_LOGO}>KitDy</Text>
                    </View>
                </View>
                <View style={Local_Style.CONTAINER_LOTTIE_VIEW}>
                    <Text style={Gobal_Style.PRIMARY_COLOR}>KitDy</Text>
                </View>
            </View>
        );
    }
    getData = async () => {
        try {
            setTimeout(() => this.props.navigation.dispatch(autoToLogin), 5000)
        } catch (error) {

        }
    }
}

