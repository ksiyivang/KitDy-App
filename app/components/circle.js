
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Gobal_Style } from '../src/styles/gobalStyle/style'

const Circle = (props) => {
    return (
        <View style={styles.CONTAINER_CHILDREN_CENTER}>
            <Text style={Gobal_Style.PRIMARY_FONT_LOGO_BLACK}>{props.children}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    CONTAINER_CHILDREN_CENTER: { justifyContent: "center", alignItems: "center", flex: 1 }
});
export default Circle;