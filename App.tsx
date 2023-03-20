import {StatusBar} from 'expo-status-bar';
import {
    ActivityIndicator,
    Alert,
    Button,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    ListRenderItem,
    Dimensions
} from 'react-native';
import React, {useState} from "react";
import {Todolist} from "./Todolist";

const {width, height} = Dimensions.get('screen')
const WIDTH = width
const HEIGHT = height

type ItemType = {
    id: number,
    title: string,
    price: number
}
const titles = ['Iphone', 'Android', 'Lenovo', "Macbook", 'Asus', 'Vivo']
const prices = [1000, 2000, 300, 500, 100, 130, 25000]
const data = [...Array(100)].map((_, index) => ({
    id: index + 1,
    title: titles[index % titles.length],
    price: prices[index % prices.length],
}))
export default function App() {
    // const [value, setValue] = useState('')
    console.log(JSON.stringify(data, null, 2))
    const render: ListRenderItem<ItemType> = ({item,index, separators}) => {
        return <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    }
    return (
        <View style={styles.container}>
            <Todolist />
            {/*<FlatList*/}
            {/*    ListEmptyComponent={() => {*/}
            {/*        return <View><Text>Пустой массив</Text></View>}*/}
            {/*    }*/}
            {/*    ListHeaderComponent={() => {*/}
            {/*        return <View><Text>ХЭДЕР</Text></View>}*/}
            {/*    }*/}
            {/*    ListFooterComponent={() => {*/}
            {/*        return <View><Text>ФУТЕР</Text></View>}*/}
            {/*    }*/}
            {/*    // stickyHeaderIndices={[0]}*/}
            {/*    showsVerticalScrollIndicator={false}*/}
            {/*    data={data}*/}
            {/*    numColumns={2}*/}
            {/*    renderItem={render}*/}
            {/*    columnWrapperStyle={{justifyContent:'space-between'}}*/}
            {/*/>*/}
            {/*<Text>Open up App.tsx to start working on your app!</Text>*/}
            {/*<ActivityIndicator/>*/}
            {/*<ActivityIndicator size="large"/>*/}
            {/*<ActivityIndicator size="small" color="#0000ff"/>*/}
            {/*<ActivityIndicator size="large" color="#00ff00"/>*/}
            {/*<Button*/}
            {/*    title="Press me"*/}
            {/*    onPress={() => Alert.alert('Cannot press this one')}*/}
            {/*/>*/}
            {/*<Image*/}
            {/*    style={{width: 100, height: 100}}*/}
            {/*    source={{*/}
            {/*        uri: 'https://reactnative.dev/img/tiny_logo.png',*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<StatusBar style="auto"/>*/}
            {/*<TextInput*/}
            {/*    style={styles.input}*/}
            {/*    onChangeText={setValue}*/}
            {/*    value={value}*/}
            {/*/>*/}
            {/*<TouchableOpacity style={styles.button}  onPress={() => {}}>*/}
            {/*    <Text>Press Here</Text>*/}
            {/*</TouchableOpacity>*/}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 60,
        paddingHorizontal: 20,

    },
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#757575',
        padding: 10,
    },
    item: {
        marginVertical: 20,
        backgroundColor: '#d5d7ff',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: (WIDTH - 20 * 2) /2 - 5,
        height: (WIDTH - 20 * 2) /2 - 5,
        position: "relative"
    },
    title: {
        position: "absolute",
        top: -15,
        left: 15,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 24,
        backgroundColor: '#d5d7ff',
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    price:{
        position: "absolute",
        top: 115,
        left: 115,
    }
});
