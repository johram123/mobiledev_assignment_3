import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

type DateProps = {
    day: string;
    month: string;
}

const CallAPI = ({month, day} : DateProps) => {
    const [data, setData] = useState<any>(" ");
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    let monthNumber = '';
    switch (month.toLowerCase()) {
        case 'january':
            monthNumber = '1';
            break;
        case 'february':
            monthNumber = '2';
            break;
        case 'march':
            monthNumber = '3';
            break;
        case 'april':
            monthNumber = '4';
            break;
        case 'may':
            monthNumber = '5';
            break;
        case 'june':
            monthNumber = '6';
            break;
        case 'july':
            monthNumber = '7';
            break;
        case 'august':
            monthNumber = '8';
            break;
        case 'september':
            monthNumber = '9';
            break;
        case 'october':
            monthNumber = '10';
            break;
        case 'november':
            monthNumber = '11';
            break;
        case 'december':
            monthNumber = '12';
            break;
    }

   
    const url = `https://numbersapi.p.rapidapi.com/${monthNumber}/${day}/date`;
    const options = {
	    method: 'GET',
	    headers: {
                'x-rapidapi-key': 'f85f5d2000msh989b7f1920d998ep10488djsn2c43dea4b6b8',
                'x-rapidapi-host': 'numbersapi.p.rapidapi.com'
        }
    };

    useEffect(() => {
        makeAPICall();
    }, [month, day]);

    const makeAPICall = async () => {
        try 
        {
            const response = await fetch(url, options);
            const data = await response.text();
            console.log(data);
            setData(data);
        } 
        catch (error) {
            setError(error as Error);

        } 
        finally 
        {
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text>{loading && <Text>Loading...</Text>}</Text>
            <Text>{error && <Text>{error.message}</Text>}</Text>
            <Text>{data && data}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 200,
    },
    item: {
        marginBottom: 10,
    },
});

export {CallAPI};