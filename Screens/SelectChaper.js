import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useState } from 'react';

// icon
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const data = [
    {
        id: 1,
        name: "Chaper 1",
        title: "The Arsonist",
    },
    {
        id: 2,
        name: "Chaper 2",
        title: "The Arsonist",
    },
    {
        id: 3,
        name: "Chaper 3",
        title: "The Arsonist",
    },
    {
        id: 4,
        name: "Chaper 4",
        title: "The Arsonist",
    }
]

function SelectChaper() {
    return (
        <View style={{ flex: 1, backgroundColor: 'pink' }}>
            <View style={{ height: 60, flexDirection: 'row', marginTop: 40, paddingHorizontal: 15, justifyContent: "space-between" }}>
                <View>
                    <Entypo name="chevron-thin-left" size={28} color="white" />
                </View>
                <View style={{ flexDirection: "row", width: 100, height: 70, }}>
                    <Entypo name="share" size={28} color="white" style={{ marginRight: 10 }} />
                    <Feather name="bookmark" size={28} color="white" style={{ marginRight: 10 }} />
                    <Feather name="star" size={28} color="white" />
                </View>
            </View>
            <View style={{ width: "100%", alignItems: "center", height: 270, marginBottom: 20 }}>
                <Image resizeMode='contain' style={{ width: 200, height: 261 }} source={require("../Image/thearsonist.jpg")} />
            </View>
            <Text style={{ color: "#F47575", fontSize: 18, marginLeft: 10 }}>Chapter</Text>
            <ScrollView style={{ marginTop: 10 }}>
                {data.map((item) => {
                    return (
                        <View key={item.id} style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 10, marginVertical: 10, backgroundColor: "#fff", paddingHorizontal: 5, paddingVertical: 5, borderRadius: 8 }}>
                            <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "#F47575", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 18 }}>{item.id}</Text>
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ color: "#F47575", fontSize: 18 }}>{item.name}</Text>
                                <Text style={{ color: "#F47575", fontSize: 18 }}>{item.title}</Text>
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <FontAwesome name="play-circle-o" size={28} color="#F47575" />
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default SelectChaper
