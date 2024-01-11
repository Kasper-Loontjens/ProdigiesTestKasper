import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors/colors'

interface Props{
    infoText: String
    title: String
}

export default function DropEducationInformation({infoText, title}:Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.kortOm}>KORT OM</Text>
        <Text style={styles.title}>{title}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderColor: colors.prodigies,
        borderWidth: 2,
        height: 70,
        margin: 20,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40
    },
    kortOm:{
        fontSize: 10,
        color: colors.prodigies
    },
    title:{
        fontSize: 25,
        color: colors.prodigies
    }
})