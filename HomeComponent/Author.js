import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const data = [
    {
        id: 1,
        name: "J.k Rowling",
        image: require('../Image/image11.png'),
    },
    {
        id: 2,
        name: "Virgina",
        image: require('../Image/image13.png'),
    },
    {
        id: 3,
        name: "Charles",
        image: require('../Image/image14.png'),
    },
    {
        id: 5,
        name: "James",
        image: require('../Image/image15.png'),
    },
    {
        id: 6,
        name: "J.k Rowling",
        image: require('../Image/image11.png'),
    },
    {
        id: 2,
        name: "Virgina",
        image: require('../Image/image13.png'),
    },
    {
        id: 7,
        name: "Charles",
        image: require('../Image/image14.png'),
    },
    {
        id: 8,
        name: "James",
        image: require('../Image/image15.png'),
    }
]

export default function Author() {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 10}}>
                <Text style={{fontSize: 17, fontWeight: "bold" }}>Popular Authors</Text>
                <Text>View more</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    data.map((item, index) => {
                        return (
                            <View key={index} style={{ alignItems: "center", marginHorizontal: 10 }}>
                                <Image source={item.image} style={{ width: 60, height: 60, borderRadius: 50 }} resizeMod='contain'/>
                                <Text style={{ fontSize: 15, marginTop: 5, color: "#F47575" }}>{item.name}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
