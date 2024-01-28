import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { useState } from 'react';

// icon
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const data = {
    id: 1,
    name: "Chaper 1",
    title: "The Arsonist",
    content: "The Arsonist is a 2014 memoir by the Australian author Chloe Hooper about the Black Saturday bushfires. The book was published on 23 September 2014 by Penguin Books Australia. The Arsonist is a 2014 memoir by the Australian author Chloe Hooper about the Black Saturday bushfires. The book was published on 23 September 2014 by Penguin Books Australia. The Arsonist is a 2014 memoir by the Australian author Chloe Hooper about the Black Saturday bushfires. The book was published on 23 September 2014 by Penguin Books Australia. The Arsonist is a 2014 memoir by the Australian author Chloe Hooper about the Black Saturday bushfires. The book was published on 23 September 2014 by Penguin Books Australia. The Arsonist is a 2014 memoir by the Australian author Chloe Hooper about the Black Saturday bushfires. The book was published on 23 September 2014 by Penguin Book The Arsonist is a 2014 memoir by the Australian author Chloe Hooper about the Black Saturday bushfires. The book was published on 23 September 2014 by Penguin Books Australia. The Arsonist is a 2014 memoir by the Australian author Chloe Hooper about the Black Saturday bushfires. The book was published on 23 September 2014 by Penguin Books Australia. The Arsonist is a 2014 memoir by the Australian author Chloe Hooper about the Black Saturday bushfires. The book was published on 23 September 2014 by Penguin Books Australia. The Arsonist is a 2014 memoir by the Australian author Chloe Hooper about the Black Saturday bushfires. The book was published on 23 September 2014 by Penguin Books Australia. The Arsonist is a 2014 memoir by the Australian author Chloe Hooper about the Black Saturday bushfires. The book was published on 23 September 2014 by Penguin Books Australia.s Australia."
}

function Read() {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ height: 40, flexDirection: 'row', marginTop: 40, paddingHorizontal: 15, justifyContent: "space-between" }}>
                <View>
                    <Entypo name="chevron-thin-left" size={28} color="#111" />
                </View>
                <View style={{ flexDirection: "row", width: 100, height: 70, }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: '#111' }}>Tên truyện</Text>
                </View>
            </View>

            <ScrollView style={{ marginTop: 10, borderRadius: 10}}>
                <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 10, marginVertical: 5, backgroundColor: "#fff", paddingHorizontal: 5, paddingVertical: 5, borderRadius: 8 }}>
                    <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "#F47575", justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "white", fontSize: 18 }}>{data.id}</Text>
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: "#F47575", fontSize: 18 }}>{data.name}</Text>
                        <Text style={{ color: "#F47575", fontSize: 18 }}>{data.title}</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 10, backgroundColor: "#fff", paddingHorizontal: 8, paddingVertical: 5, borderRadius: 8 }}>
                    <Text style={{ color: "#111", fontSize: 18 }}>{data.content}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Read
