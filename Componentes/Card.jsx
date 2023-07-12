import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';
import { Card } from 'react-native-elements';

function makeCard(){

    return(
        <View>
        <Card title="Cafe" style={styles.card}>
            <Image
                style={styles.image}
                source={require("./imgs/coffee1.jpeg")}
            />
            <Text style={styles.text}>Mocha</Text>
        </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 400,
        height: 150,
        marginBottom: 15
    },
    text: {
        
    }
});

export default makeCard();