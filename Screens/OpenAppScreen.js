import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Pressable} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function OpenAppScreen() {
  return (
    <View style={styles.container}>
      <View> 
        <Image resizeMode='contain' style={{width:250,height:300}} source={require("../Images/image1.jpg")}/> 
        </View>
        <Text style={{fontWeight:'bold',fontSize:40}}> Keep reading,</Text>
        <Text style={{fontWeight:'bold',fontSize:25}}> You'll fall in love</Text>
        <Text style={{fontSize:15,paddingHorizontal:10,textAlign:'center',marginTop:50,fontWeight:"450"}}> A library of bite-sized business eBooks on soft skils and access to 30+ millions books in various languages with an easy and simple monthly subscription and read anywhere, any devices.</Text>
        <Pressable>
          <View style={{width:200,height:50,backgroundColor:"#F47575",marginTop:40, justifyContent:"center" }}> 
          <Text style={{fontWeight:"bold",fontSize:18, textAlign:"center",}}> Start your journey </Text>
          </View>          
        </Pressable>
        <Pressable style={{marginTop:30}}> <FontAwesome5 name="arrow-circle-right" size={50} color="#F47575" /> </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
