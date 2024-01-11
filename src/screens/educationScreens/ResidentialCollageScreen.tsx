import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HeaderEducation from '../../components/educationComp/HeaderEducation'
import { colors } from '../../styles/colors/colors'
import Footer from '../../components/Footer'

export default function ResidentialCollageScreen() {
  return (
    <View style={styles.container}>
    <HeaderEducation title={'Folkhögskola'} color={colors.folkhogskola}/>
    <View style={styles.footer}>
      <Footer title={'Utbildningar'} />
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer:{
    flex: 1,
    justifyContent: 'flex-end',
  },
})