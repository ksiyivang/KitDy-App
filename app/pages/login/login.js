import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image,
    TouchableHighlight,
    Dimensions,

} from 'react-native'
import Circle from '../../components/circle'
import { PRIMARY_FONT_COLOR_WHITE, Gobal_Style } from '../../src/styles/gobalStyle/style';
import BlueButton from '../../components/blueButton'
import BlueText from '../../components/blueText'
import Button from '../../components/button'
import { Icons } from '../../src/icon/icons'

export default class Login extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    _onHandlerLogin = () => {
        this.props.navigation.navigate("mainMenuScreen");
    }
    _onPressSignUp = () => {
        this.props.navigation.navigate("signUpScreen")
    }
    render() {
        return (
            <View style={styles.CONTAINER_CRICLE}>
                <View style={styles.CONTAINER_PADDING_TOP} />
                <View style={styles.CONTAINER_MANAGE_CENTER}>
                    <View style={styles.CONTAINER_CRICLE_CHILD}>
                        <Circle>ລ໋ອກອິນ</Circle>
                    </View>
                </View>
                <View style={styles.CONTAINER_PADDING_TOP_LOGIN} />
                <View style={styles.CONTAINER_HORIZONTAL}>
                    <View style={styles.CONTAINER_PADDING_LEFT}>
                        <BlueText>ຊື່ຜູ້ໃຊ້ ຫຼື ອີ່ເມວ</BlueText>
                    </View>
                    <View style={styles.CONTAINER_PADDING_TOP_TEXT} />
                    <View style={styles.CONTAINER_HORIZONTALL}>
                        <View style={styles.CONTAINER_VIEW_INPUTTEXT}>
                            <View style={styles.CONTAINER_IMAGE}>
                                <Image source={Icons.icon_user}
                                    style={styles.CONTAINER_STYLE_IMAGE} />
                            </View>
                            <View style={styles.CONTAINER_INPUT_TEXT}>
                                <TextInput style={styles.CONTAINER_INPUT}
                                    placeholder="ປ້ອນຊື່ ຫຼື ອີ່ເມວ"
                                    placeholderTextColor="#006ECC"
                                    autoCapitalize="none"
                                    onChangeText={this.handleEmail} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.CONTAINER_PADDING_TOP_TEXT} />
                    <View style={styles.CONTAINER_PADDING_LEFT}>
                        <BlueText>ລະຫັດຜ່ານ</BlueText>
                    </View>
                    <View style={styles.CONTAINER_PADDING_TOP_TEXT} />
                    <View style={styles.CONTAINER_HORIZONTALL}>
                        <View style={styles.CONTAINER_VIEW_INPUTTEXT}>
                            <View style={styles.CONTAINER_IMAGE}>
                                <Image source={Icons.icon_password}
                                    style={styles.CONTAINER_STYLE_IMAGE} />
                            </View>
                            <View style={styles.CONTAINER_INPUT_TEXT}>
                                <TextInput style={styles.CONTAINER_INPUT}
                                    placeholder="ລະຫັດຜ່ານ"
                                    placeholderTextColor="#006ECC"
                                    autoCapitalize="none"
                                    onChangeText={this.handlePassword} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.CONTAINER_PADDING_TOP_PASSWORD} />

                    <View style={styles.CONTAINER_HORIZONTALL}>
                        <TouchableHighlight style={{ borderRadius: 10 }}
                            onPress={() => this._onHandlerLogin()}>
                            <BlueButton>ລ໋ອກອິນ</BlueButton>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.CONTAINER_PADDING_TOP_LOGIN} />

                    <View style={styles.CONTAINER_MANAGE_CENTER}>
                        <BlueText>ບໍ່ ຍັງບໍ່ທັນສະໝັກສະມາຊິກເທື່ອ</BlueText>
                    </View>
                    <View style={styles.CONTAINER_PADDING_TOP_TEXT} />

                    <View style={styles.CONTAINER_HORIZONTALL}>
                        <TouchableHighlight style={{ borderRadius: 10 }}
                            onPress={() => this._onPressSignUp()}
                        >
                            <Button>ສະໝັກສະມາຊິກ</Button>
                        </TouchableHighlight>
                    </View>

                </View>
            </View >
        );
    }
}
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
    CONTAINER_PADDING_TOP: { paddingTop: 40 },
    CONTAINER_PADDING_LEFT: { paddingLeft: 20 },
    CONTAINER_PADDING_TOP_TEXT: { paddingTop: 15 },
    CONTAINER_PADDING_TOP_LOGIN: { paddingTop: 70 },
    CONTAINER_CRICLE: {
        backgroundColor: "#F8F8F8",
        flex: 1,
    },
    CONTAINER_MANAGE_CENTER: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    CONTAINER_CRICLE_CHILD: {
        width: 160,
        height: 160,
        backgroundColor: "#FFF",
        borderRadius: 160 / 2,
    },
    CONTAINER_PADDING_TOP_PASSWORD: { paddingTop: 20 },
    CONTAINER_HORIZONTAL: {
        width: width - 30,
        paddingLeft: 30
    },
    CONTAINER_HORIZONTALL: {
        paddingLeft: 18,
        paddingRight: 18,
    },
    CONTAINER_INPUT: {
        margin: 15,
        height: 50,
        borderColor: '#707070',
        borderRadius: 10,
        paddingLeft: 15,
    },
    CONTAINER_VIEW_INPUTTEXT: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#707070",
        borderRadius: 10,
        backgroundColor: "#FFF"
    },
    CONTAINER_IMAGE: {
        width: "5%",
        alignItems: "center",
        paddingLeft: 20,
    },
    CONTAINER_INPUT_TEXT: { width: "95%" },
    CONTAINER_STYLE_IMAGE: { width: 12, height: 15 }



})