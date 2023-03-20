import {Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import React, {ReactElement, ReactNode, useState} from "react";
import {Checkbox} from "expo-checkbox";
import {Input} from "./input/Input";

export const Todolist = () => {
    const [value, setValue] = useState('')
    const [editMode, setEditMode] = useState(0)
    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: true},
        {id: 4, title: 'ReactNative', isDone: false},
    ])

    const addTask = () => {
        const newTask = {
            id: tasks.length + 1, title: value, isDone: false
        }
        setTasks([newTask, ...tasks])
        setValue('')
        // Alert.alert(JSON.stringify(newTask))
    }

    const changeStatus = (taskId: number, newStatus: boolean) => {
        setTasks(tasks.map(task => task.id === taskId ? {...task, isDone: newStatus} : task))
    }

    const changeTitle = (taskId: number, title: string) => {
        setTasks(tasks.map(task => task.id === taskId ? {...task, title: title} : task))
    }

    return (
        <View style={[styles.container]}>
            <HideKeyboard>
                <View style={[{width: '100%', alignItems: 'center', paddingVertical: 30,}]}>
                    <TextInput style={[styles.input]} value={value} onChangeText={setValue}/>
                </View>
            </HideKeyboard>
            <View>
                <Button title={'Add task'} onPress={addTask} color={'#f9bc60'}/>
            </View>
            <View style={{width: '80%'}}>
                {tasks.map((task) => {
                    return <View key={task.id} style={[styles.taskBox]}>
                        <Checkbox style={[styles.checkbox]} value={task.isDone}
                                  onValueChange={(value) => changeStatus(task.id, value)}/>
                        {editMode === task.id
                            ?
                            <Input id={task.id} title={task.title} changeTitle={changeTitle} setEditMode={setEditMode}/>
                            : <Text onPress={() => setEditMode(task.id)}>{task.title}</Text>}
                    </View>
                })}
            </View>
        </View>
    )
}

const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004643',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        paddingHorizontal: 20,

    },
    taskBox: {
        flexDirection: "row",
        backgroundColor: '#fffffe',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 20,
        borderWidth: 1,
        marginVertical: 3,
    },
    input: {
        height: 40,
        width: '80%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fffffe',
    },
    inputChangeTitle: {
        height: 20,
        width: '80%',
    },
    checkbox: {}
});

