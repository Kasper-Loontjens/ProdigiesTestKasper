import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../styles/colors/colors";

interface Props {
    title: String
}

const Footer: React.FC<Props> = ({title}) =>{
    return(
        <View style={styles.header}>
            <Image style={styles.img} source={require('../assets/images/prodigiesFigureHead.png')}/>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderTopColor:'#cfcfcf',
        borderBottomColor: '#cfcfcf',
        alignItems: 'center'
    },
    headerText:{
        fontSize: 13,
        fontWeight: 'bold',
        color: colors.prodigies
    },
    img:{
        height:35,
        width:30
    }
})

export default Footer