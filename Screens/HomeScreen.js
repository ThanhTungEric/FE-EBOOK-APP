import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// component Author
import Author from '../HomeComponent/Author';
import ContuniueReading from '../HomeComponent/ContuniueReading';
import TrendingBooks from '../HomeComponent/TrendingBooks';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={{ height: 60, marginTop: 40, paddingHorizontal: 10, flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                <Entypo name="menu" size={30} color="black" />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                    <Text style={{ fontSize: 17, marginRight: 10 }}>Hello Tommy</Text>
                    <Image source={require('../Image/image3.png')} style={{ width: 40, height: 40, borderRadius: 20 }} />
                </View>
            </View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{}}
            >
                <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: "bold" }}>KEEP EXPLORING</Text>
                <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
                    <View style={{ flexDirection: "row", width: 300, justifyContent: "space-between", borderWidth: 1, borderColor: "#ececec", borderRadius: 10, paddingHorizontal: 10, paddingVertical: 8 }}>
                        <AntDesign name="search1" size={24} color="black" />
                        <Text style={{ fontSize: 17, marginLeft: 10 }}>Search....</Text>
                        <Ionicons name="options" size={24} color="black" />
                    </View>
                </View>
                <View style={{ width: "100%", alignItems: "center" }}>
                    <Image source={require('../Image/image7.png')} style={{ width: "90%", height: 150, marginTop: 20, borderRadius: 10 }} />
                </View>
                <Author />
                <ContuniueReading />
                <TrendingBooks />
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
