import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';
import { useState } from 'react';

const genres = [
    {
        id: 1,
        name: "Fantasy",
    }
    ,
    {
        id: 2,
        name: "Comedy",
    },
    {
        id: 3,
        name: "Horror",
    },
    {
        id: 4,
        name: "Romance",
    },
    {
        id: 5,
        name: "Action",
    },
    {
        id: 6,
        name: "Adventure",
    },
    {
        id: 7,
        name: "Mystery",
    },
    {
        id: 8,
        name: "Thriller",
    }
]

const books = [
    {
        id: 1,
        name: "This is How it Always is",
        author: "Laurie Frankel",
        image: require('../Image/ThisisHowiAlwaysis.jpg'),
        genres: "Fantasy"
    },
    {
        id: 2,
        name: "In A Land Of Paper Gods",
        author: "Rebecca Mackenzie",
        image: require('../Image/InALandOfPaperGods.jpg'),
        genres: "Comedy"
    },
    {
        id: 3,
        name: "Mat biec",
        author: "Nguyen Nhat Anh",
        image: require('../Image/matbiec.jpg'),
        genres: "Horror"
    }
]

function TrendingBooks() {
    const [focus, setFocus] = useState(1);
    return (
        <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>Treding Reading</Text>
                <Text>View all</Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                {
                    genres.map((item, index) => {
                        return (
                            <Pressable key={index} style={{ alignItems: "center", marginHorizontal: 5, backgroundColor: focus == item.id ? "#203a61" : "#fafbfe", paddingHorizontal: 10, paddingVertical: 4, borderRadius: 15, justifyContent: "center" }} onPress={() => setFocus(item.id)}>
                                <Text style={{ fontSize: 16, fontWeight: "bold", color: focus == item.id ? "#fff" : "#000" }}>{item.name}</Text>
                            </Pressable>
                        )
                    })
                }
            </ScrollView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                {
                    books.map((item, index) => {
                        return (
                            <View key={index} style={{ alignItems: "center", paddingHorizontal: 10}}>
                                <Image source={item.image} style={{ width: 150, height: 230, borderRadius: 10 }} />
                                <Text style={{ fontSize: 13, marginTop: 5, fontWeight: "bold" }}>{item.name}</Text>
                                <Text style={{ fontSize: 12, color: "#424256" }}>{item.author}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default TrendingBooks
