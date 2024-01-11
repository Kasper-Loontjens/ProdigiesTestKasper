import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { AppStackParamList } from "../navigations/CoreNavigation";
import { colors } from "../styles/colors/colors";

interface Props {
    titleText: String,
    infoText: String
    color: any,
    screenName: String
}

const DropDownComponent: React.FC<Props> = ({infoText, titleText,color, screenName}) =>{
    const [isExpanded, setIsExpanded] = useState(false)
    const navigation = useNavigation<AppStackParamList>();

    return(
        <View style={styles.container} >
            <View style={[styles.dropDown, {backgroundColor:color}]}>
                <Pressable onPress={()=>
                navigation.navigate(screenName)
                }>
                    <Text style={styles.buttonText}>{titleText}</Text>
                </Pressable>
                <Pressable style={styles.arrowContainer} onPress={()=>{
                if (isExpanded) {
                    setIsExpanded(false)
                }else{
                    setIsExpanded(true)
                }
                }}>
                    <Image style={styles.arrowImage} source={require('../assets/images/dropDownArrow.png')}/>
                </Pressable>
            </View>
            {isExpanded && <Text style={styles.text}>{infoText}</Text>}
        </View>

    )


}

export default DropDownComponent

const styles = StyleSheet.create({
    dropDown:{
        padding: 1,
        borderRadius: 3,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttonText:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 1,
    },
    container:{
        alignItems: 'flex-start',
        maxWidth: 220,
    },
    arrowContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowImage:{
        height: 10,
        width: 20,
        marginTop: 12,
        marginRight: 10,
        marginLeft: 2,
        transform: [{rotate: '180deg'}]
    },
    text:{

    }

})