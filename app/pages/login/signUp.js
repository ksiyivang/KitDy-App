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
    ScrollView,
} from 'react-native'
import Circle from '../../components/circle'
import { PRIMARY_FONT_COLOR_WHITE, Gobal_Style } from '../../src/styles/gobalStyle/style';
import BlueButton from '../../components/blueButton'
import BlueText from '../../components/blueText'
import Button from '../../components/button'
import { Icons } from '../../src/icon/icons'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        email: '',
        password: ''
    }
    handleUsername = (text) => {

    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    }
    _signUpHandler = () => {
        this.props.navigation.navigate("loginScreen")
    }
    _onPressBackLogin = () => {
        this.props.navigation.navigate("loginScreen")
    }
    render() {
        return (
            <View style={styles.CONTAINER_CRICLE}>
                <TouchableOpacity onPress={() => this._onPressBackLogin()}>
                    <View style={{ paddingTop: 20, paddingLeft: 20 }}>
                        <Image source={Icons.icon_back} />
                    </View>
                </TouchableOpacity>
                <View style={styles.CONTAINER_PADDING_TOP} />
                <View style={styles.CONTAINER_MANAGE_CENTER}>
                    <View style={styles.CONTAINER_CRICLE_CHILD}>
                        <Circle>ລົງທະບຽນ</Circle>
                    </View>
                </View>
                <View style={styles.CONTAINER_PADDING_TOP_LOGIN} />

                <ScrollView>
                    <View style={styles.CONTAINER_HORIZONTAL}>
                        {/*ຊື່ຜູ້ໃຊ້  */}
                        <View style={styles.CONTAINER_PADDING_LEFT}>
                            <BlueText>ຊື່ຜູ້ໃຊ້</BlueText>
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
                                        placeholder="ປ້ອນຊື່"
                                        placeholderTextColor="#006ECC"
                                        autoCapitalize="none"
                                        onChangeText={this.handleUsername} />
                                </View>
                            </View>
                        </View>

                        {/* ອີ່ເມວ */}
                        <View style={styles.CONTAINER_PADDING_TOP_TEXT} />
                        <View style={styles.CONTAINER_PADDING_LEFT}>
                            <BlueText>ອີ່ເມວ</BlueText>
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
                                        placeholder="ອີ່ເມວ"
                                        placeholderTextColor="#006ECC"
                                        autoCapitalize="none"
                                        onChangeText={this.handleEmail} />
                                </View>
                            </View>
                        </View>

                        {/* ເບີໂທ */}
                        <View style={styles.CONTAINER_PADDING_TOP_TEXT} />
                        <View style={styles.CONTAINER_PADDING_LEFT}>
                            <BlueText>ເບີໂທ</BlueText>
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
                                        placeholder="ເບີໂທ"
                                        placeholderTextColor="#006ECC"
                                        autoCapitalize="none"
                                        onChangeText={this.handlePhone} />
                                </View>
                            </View>
                        </View>

                        {/* ລະຫັດຜ່ານ */}
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

                        {/* ຢືັນຢັນລະຫັດຜ່ານ */}
                        <View style={styles.CONTAINER_PADDING_TOP_TEXT} />
                        <View style={styles.CONTAINER_PADDING_LEFT}>
                            <BlueText>ຢືັນຢັນລະຫັດຜ່ານ</BlueText>
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
                                        placeholder="ຢນຢັນລະຫັດຜ່ານ"
                                        placeholderTextColor="#006ECC"
                                        autoCapitalize="none"
                                        onChangeText={this.handleconfrimPassword} />
                                </View>
                            </View>
                        </View>



                        <View style={styles.CONTAINER_PADDING_TOP_PASSWORD} />

                        <View style={styles.CONTAINER_PADDING_TOP_LOGIN} />
                        <View style={styles.CONTAINER_HORIZONTALL}>
                            <TouchableHighlight style={{ borderRadius: 10 }}
                                onPress={() => this._signUpHandler()}>
                                <BlueButton>ຊ່າຍອັບ</BlueButton>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.CONTAINER_PADDING_BOTTOM} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
    CONTAINER_PADDING_BOTTOM: { paddingBottom: 20 },
    CONTAINER_PADDING_TOP: { paddingTop: 40 },
    CONTAINER_PADDING_LEFT: { paddingLeft: 20 },
    CONTAINER_PADDING_TOP_TEXT: { paddingTop: 15 },
    CONTAINER_PADDING_TOP_LOGIN: { paddingTop: 50 },
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