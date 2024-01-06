import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default function AddToCart() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 20, paddingHorizontal: 15, justifyContent: "space-between" }}>
                <View>
                    <Entypo name="chevron-thin-left" size={28} color="white" />
                </View>
                <View style={{ flexDirection: "row", width:100, height:70, }}>
                    <Entypo name="share" size={28} color="white" style={{marginRight:10}} />
                    <Feather name="bookmark" size={28} color="white" style={{marginRight:10}}/>
                    <Feather name="star" size={28} color="white"/>
                </View>
            </View>
            <View style={{width:"100%",height:300 ,alignItems:"center",marginBottom:50}}>
            <Image resizeMode='contain' style={{width:200, height:261 }} source={require("../Images/image23.jpg")}/> 
            </View>
            <View style={{flexDirection:"row", }}> 
            <FontAwesome name="star" size={24} color="black" />
            </View>











            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F68545E3",
    },
});