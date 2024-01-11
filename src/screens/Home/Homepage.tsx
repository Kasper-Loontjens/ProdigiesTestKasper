
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import DropDownComponent from '../../components/DropDown';
import Header from '../../components/Footer';
import { colors } from '../../styles/colors/colors';
import { useNavigation } from '@react-navigation/native';
import Footer from '../../components/Footer';


function Homepage(): React.JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.universitet}>
        <DropDownComponent titleText={'Universitet'} infoText={'This is important information, very important, take note of its importance and weep'} color={colors.universitet} screenName={'UniversityScreen'}/>
      </View>
      <View style={styles.yrkeshogskola}>
        <DropDownComponent titleText={'Yrkeshögskola'} infoText={'Good stuff!'} color={colors.yrkeshogskola} screenName={'VocationalScreen'}/>
      </View>
      <View style={styles.hogskoleprovet}>
        <DropDownComponent titleText={'Högskoleprovet'} infoText={'Good stuff!'} color={colors.hogskoleprovet} screenName={'UniversityExamScreen'}/>
      </View>
      <View style={styles.folkhogskola}>
        <DropDownComponent titleText={'Folkhögskola'} infoText={'Good stuff!'} color={colors.folkhogskola} screenName={'ResidentialCollageScreen'}/>
      </View>
      <View style={styles.komvux}>
        <DropDownComponent titleText={'Komvux'} infoText={'Good stuff!'} color={colors.komvux} screenName={'KomvuxScreen'}/>
      </View>
      
      <View style={styles.footer}>
        <Footer title={'Utbildningar'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  footer:{
    flex: 1,
    justifyContent: 'flex-end',
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  universitet:{
    right: 10,
    alignSelf:'flex-end',
    flex:1,
    marginTop:20,
  },
  yrkeshogskola:{
    left: 10,
    flex:1,

  },
  hogskoleprovet:{
    marginRight: 10,
    alignSelf: 'flex-end',
    flex:1,

  },
  folkhogskola:{
    left: 10,
    flex:1
  },
  komvux:{
    right: 10,
    alignSelf: 'flex-end',
    flex:1
  },


});

export default Homepage;
