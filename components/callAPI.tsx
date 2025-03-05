import { useEffect, useState } from "react";
import { View, Text, StyleSheet, AppConfig } from "react-native";

type DateProps = {
    day: string;
    month: string;
}

type APIResponse = {
    text: string;
    year: number;
    number : number, 
    found : boolean,
    type: string,
    message: string,
}


const CallAPI = ({month, day} : DateProps) => {
    const [data, setData] = useState<APIResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const url = `https://numbersapi.p.rapidapi.com/${month}/${day}/date?json=true`;
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
            const data = await response.json();
            setData(data);
        }
        catch (error)
        {
            setError(error as Error);
        }
        finally 
        {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text>{loading && <Text>Loading...</Text>}</Text>
            <Text>{error && <Text>Invalid Date</Text>}</Text>
            <Text>{data && error == null && data.text}</Text>
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