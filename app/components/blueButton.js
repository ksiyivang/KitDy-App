import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { Gobal_Style } from '../src/styles/gobalStyle/style';
const BlueButton = (props) => {

    return (
        <View style={styles.CONTAINER_BUTTON_SUBMIT}>
            <Text style={Gobal_Style.PRIMARY_FONT_COLOR_WHITE}>{props.children}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    CONTAINER_BUTTON_SUBMIT: {
        backgroundColor: '#006ECC',
        paddingHorizontal: 20,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
});
export default BlueButton;
