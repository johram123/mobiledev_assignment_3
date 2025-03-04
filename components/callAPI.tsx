import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

type DateProps = {
    day: number;
    month: number;
}

const CallAPI = ({month, day} : DateProps) => {
    const [data, setData] = useState<any>(" ");
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const url = `https://numbersapi.p.rapidapi.com/${month}/${day}/date`;
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
        catch (error)
        {
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