import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { CallAPI } from "../components/callAPI";
import { Picker } from "@react-native-picker/picker";

export default function App() {
    const [month, setMonth] = useState<string>("");
    const [day, setDay] = useState<string>("");

    const monthNames = [
        ["1", "January"],
        ["2", "February"],
        ["3", "March"],
        ["4", "April"],
        ["5", "May"],
        ["6", "June"],
        ["7", "July"],
        ["8", "August"],
        ["9", "September"],
        ["10", "October"],
        ["11", "November"],
        ["12", "December"],
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
            <Text style={styles.header}>Assignment 3: Interesting Facts</Text>

            <View style={styles.content}>
                <View style={styles.apiComponent}>
                    <View style={styles.apiTextContainer}>
                        <CallAPI month={month} day={day} />
                    </View>
                </View>

                {/* Used "131 - The Picker Component in React Native" by Easy Learning as a reference for the Picker component https://www.youtube.com/watch?v=dSY6HJc7CXE */}

                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={month}
                        style={styles.picker}
                        onValueChange={(itemValue) => setMonth(itemValue)}
                    >
                        <Picker.Item label="Select a Month" value="" />
                        {monthNames.map(([key, month]) => 
                        (
                            <Picker.Item key={key} label={month} value={key} />
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
            </View>   
        </View>
    );
};

const styles = StyleSheet.create({
    container: {    
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
        paddingVertical: 10,
        backgroundColor: '#fff', 
        zIndex: 1,
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
    },
    pickerContainer: {
        flexDirection: "row",
        justifyContent: "center",
    },
    picker: {
        width: 200,
        height: 200,
        paddingTop: 50,
    },
    apiComponent: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 100, 
    },
    apiTextContainer: {
        backgroundColor: '#EEEEF0', // Updated to match the picker's selected color
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        height: 200,
        width: 300,
    },
});