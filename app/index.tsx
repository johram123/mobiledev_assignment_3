import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { CallAPI } from "../components/callAPI";


const Lab5 = () => {

    useEffect(() => {
        <CallAPI month= {month} day= {day} />
    }, [month, day]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Lab 5</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {    
        flex: 1, 
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "gray",
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
});

export default Lab5;