import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ContuniueReading() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/book')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
  }, []);

  const handleClick = (id) => {
    navigation.navigate('Read', {id});
  }

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
              <TouchableOpacity
                onPress={() => handleClick(item.id)}
                key={index} style={{ alignItems: "center", marginHorizontal: 10 }}>
                <Image source={item.image} style={{ width: 150, height: 230, borderRadius: 10 }} />
                <Text style={{ fontSize: 16, marginTop: 5, fontWeight: "bold" }}>{item.name}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{ width: 100, height: 7, backgroundColor: "#e6e6e8", borderRadius: 10 }}>
                    <View style={{ width: item.process, height: 7, backgroundColor: "#424256", borderRadius: 10 }}></View>
                  </View>
                  <Text style={{ marginLeft: 10, fontSize: 12, color: "#424256" }}>30%</Text>
                </View>
              </TouchableOpacity>
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
