import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const data = [
  {
    id: 1,
    name: "Harry Potter",
    image: require('../Image/harrypotter.jpg'),
    process: 50,
  },
  {
    id: 2,
    name: "The Secret Garden",
    image: require('../Image/thearsonist.jpg'),
    process: 80,
  },
  {
    id: 3,
    name: "Mat biec",
    image: require('../Image/matbiec.jpg'),
    process: 20,
  }
]

export default function ContuniueReading() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>Contuniue Reading</Text>
        <Text>View all</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
        {
          data.map((item, index) => {
            return (
              <View key={index} style={{ alignItems: "center", marginHorizontal: 10 }}>
                <Image source={item.image} style={{ width: 150, height: 230, borderRadius: 10 }} />
                <Text style={{ fontSize: 16, marginTop: 5, fontWeight: "bold" }}>{item.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center"}}>
                  <View style={{ width: 100, height: 7, backgroundColor: "#e6e6e8", borderRadius: 10 }}>
                    <View style={{ width: item.process, height: 7, backgroundColor: "#424256", borderRadius: 10 }}></View>
                  </View>
                  <Text style={{ marginLeft: 10, fontSize: 12, color: "#424256" }}>{item.process}%</Text>
                </View>
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
    backgroundColor: '#fff',
    marginTop: 10,
  },
});
