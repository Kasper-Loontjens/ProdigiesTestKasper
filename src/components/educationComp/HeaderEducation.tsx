import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../styles/colors/colors'
import { useNavigation } from '@react-navigation/native'
import { AppStackParamList } from '../../navigations/CoreNavigation'

interface Props {
    title: String
    color: any
}

const HeaderEducation: React.FC<Props> = ({title, color}) => {
  const navigation = useNavigation()
  return (
    <View>
      <View style={[styles.container]}>
        
        <TouchableOpacity onPress={()=> navigation.goBack() } style={styles.imgContainer}>
          <Image style={styles.img} source={require('../../assets/images/leftArrow.png')}/>
        </TouchableOpacity>
        <Text style={[styles.title,{backgroundColor: color}]}>{title}</Text>
        
      </View>
      <View style={[styles.dateBar,{backgroundColor: color}]}>
        <Text style={styles.dateText}>Ansök till HT2024</Text>
      </View>
    </View>
  )
}
//       

export default HeaderEducation

const styles = StyleSheet.create({
    container:{
      height:75,
      backgroundColor: colors.prodigies,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title:{
      fontSize: 25,
      fontWeight: 'bold',
      color: '#fff',
      padding: 10,
      paddingRight: 20,
      paddingLeft: 20,
      borderRadius: 3,
      alignSelf: 'center'
    },
    img:{
      height: 20,
      width: 35,
      backgroundColor: colors.prodigies,
    },
    imgContainer:{
      position: 'absolute',
      left: 10
    },
    dateBar:{
      height:20
    },
    dateText:{
      color: '#fff',
      marginLeft: 60,
      fontSize:12
    }

})