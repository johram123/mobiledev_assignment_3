import { View, Text, TouchableOpacity, Button, StyleSheet, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { CallAPI } from "../components/callAPI";


export default function App() {
    const [month, setMonth] = useState<string>("");
    const [day, setDay] = useState<string>("");
    


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Assignment 3</Text>

            <CallAPI month={month} day={day} />

            <TextInput style={styles.TextInput} value={month} onChangeText={setMonth} placeholder="Enter Month" /> 
            <TextInput style={styles.TextInput}value={day} onChangeText={setDay} placeholder="Enter Day" /> 
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {    
        flex: 1, 
        justifyContent: "space-between",
        alignItems: "center",
        
    },
    header: {
        alignItems: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    apiComponent: {
        alignItems: "center",
    },
    button: {
        padding: 10,
        width: 120,
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#dfe6ef",    
    },
    TextInput: {
        width: 200,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
    },
});

