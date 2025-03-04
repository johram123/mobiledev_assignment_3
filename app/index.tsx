import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { CallAPI } from "../components/callAPI";
import { Picker } from "@react-native-picker/picker";

export default function App() {
    const [month, setMonth] = useState<string>("");
    const [day, setDay] = useState<string>("");

    const monthsName = 
    [
        "January", "February", "March", 
        "April", "May", "June",
        "July", "August", "September", 
        "October", "November", "December"
    ];

    const daysNum = 
    [
        "1", "2", "3", "4", "5", 
        "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", 
        "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", 
        "26", "27", "28", "29", "30", 
        "31"
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Assingment 3</Text>

            <CallAPI month={month} day={day} />

            // Used "131 - The Picker Component in React Native" by Easy Learning
            // as a reference for the Picker component
            // https://www.youtube.com/watch?v=dSY6HJc7CXE

            <Picker
                selectedValue={month}
                style={styles.picker}
                onValueChange={(itemValue) => setMonth(itemValue)}
            >
                <Picker.Item label="Select a Month" value="" />
                {monthsName.map((month, index) => 
                (
                    <Picker.Item key={index} label={month} value={month} />
                ))}
            </Picker>

            <Picker
                selectedValue={day}
                style={styles.picker}
                onValueChange={(itemValue) => setDay(itemValue)}
            >
                <Picker.Item label="Select a Day" value="" />
                {daysNum.map((day, index) => (
                    <Picker.Item key={index} label={day} value={day} />
                ))}
            </Picker>
            
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
    picker: {
        width: 200,
        height: 50,
        backgroundColor: "lightgrey",
        marginBottom: 20,
    },
});

