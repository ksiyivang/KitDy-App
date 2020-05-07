import React from 'react';
import { Text, View } from 'react-native'
import { Gobal_Style } from '../src/styles/gobalStyle/style';
const BlueText = (props) => {

    return (
        <View>
            <Text style={Gobal_Style.PRIMARY_BULE_COLOR}>{props.children}</Text>
        </View>
    );
}
export default BlueText;
