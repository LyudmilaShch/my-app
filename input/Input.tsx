import React, {useState} from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";
import {globalStyles} from "../global-styles";

type IProps = {
    id: number
    title: string
    changeTitle: (taskId: number, title: string) => void
    setEditMode: (taskId: number) => void
}
const Input = (props: IProps) => {
    const [value, setValue] = useState(props.title)

    const changeTitle = (title: string) => {
        setValue(title)
    }

    return (
        <View style={{flexDirection: 'row'}}>
            <TextInput style={[styles.inputChangeTitle, globalStyles.border]} value={value}
                       onChangeText={(title) => changeTitle(title)}/>
            <Button title={'+'} onPress={() => {
                props.changeTitle(props.id, value)
                props.setEditMode(0)
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputChangeTitle: {
        height: 30,
        width: '80%',
    },
});

export {Input}