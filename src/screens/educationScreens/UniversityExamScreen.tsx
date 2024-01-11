import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Footer from '../../components/Footer'
import HeaderEducation from '../../components/educationComp/HeaderEducation'
import { colors } from '../../styles/colors/colors'
import DropEducationInformation from '../../components/educationComp/DropEducationInformation'

export default function UniversityExamScreen() {
  return (
    <View style={styles.container}>
      <HeaderEducation title={'Högskoleprovet'} color={colors.hogskoleprovet}/>
      <DropEducationInformation infoText={'undefined'} title={'undefined'}/>
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