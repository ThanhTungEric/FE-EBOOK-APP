import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
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
                <View style={{ flexDirection: "row", width: 100, height: 70, }}>
                    <Entypo name="share" size={28} color="white" style={{ marginRight: 10 }} />
                    <Feather name="bookmark" size={28} color="white" style={{ marginRight: 10 }} />
                    <Feather name="star" size={28} color="white" />
                </View>
            </View>
            <View style={{ width: "100%", height: 300, alignItems: "center" }}>
                <Image resizeMode='contain' style={{ width: 200, height: 261 }} source={require("../Images/image23.jpg")} />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", }}>
                <FontAwesome name="star" size={20} color="#f9cb5f" style={{ marginRight: 10 }} />
                <FontAwesome name="star" size={20} color="#f9cb5f" style={{ marginRight: 10 }} />
                <FontAwesome name="star" size={20} color="#f9cb5f" style={{ marginRight: 10 }} />
                <FontAwesome name="star" size={20} color="#f9cb5f" style={{ marginRight: 10 }} />
                <FontAwesome name="star" size={20} color="#dbdbdf" style={{ marginRight: 10 }} />
            </View>
            <Text style={{ fontWeight: "500", fontSize: 30, width: "100%", textAlign: 'center' }}>The Arsonist  </Text>
            <Text style={{ fontWeight: "300", fontSize: 15, width: "100%", textAlign: 'center', color: "#acacb5" }}>Chloe Hooper  </Text>
            <View style={{ flexDirection: "row", width: "100%", height: 90 }}>
                <View style={{ flexDirection: "column", width: 100, height: 70, backgroundColor: "white", alignItems: "center" }}>
                    <Text style={{ fontWeight: "500", fontSize: 18 }}> 2010</Text>
                    <Text style={{ fontWeight: "400", fontSize: 15 }}> Published in</Text>
                </View>
                <View style={{ flexDirection: "column", width: 100, height: 70, backgroundColor: "white", alignItems: "center" }}>
                    <Text style={{ fontWeight: "500", fontSize: 18 }}> 156 </Text>
                    <Text style={{ fontWeight: "400", fontSize: 15 }}> Pages</Text>
                </View>
                <View style={{ flexDirection: "column", width: 100, height: 70, backgroundColor: "white", alignItems: "center" }}>
                    <Text style={{ fontWeight: "500", fontSize: 18 }}> 187 </Text>
                    <Text style={{ fontWeight: "400", fontSize: 15 }}> Reviews</Text>
                </View>
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