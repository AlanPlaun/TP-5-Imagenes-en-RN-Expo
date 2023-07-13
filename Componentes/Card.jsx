import React from 'react';
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native';

function Card(){
    return(
        <View style={styles.container} >
                    <Image source={require('../imgs/coffee1.jpeg')} style={styles.imagen}/>
                <View style={styles.txtContain}>
                    <Text style={styles.txt}>Mocha</Text>
                </View >
            </View>
    );
};

const styles = StyleSheet.create({
    container:{
        padding: 16,
    },
    imagen:{
        width:300, 
        height:300,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,       
    },
    txtContain:{
        alignItems: 'center',
        backgroundColor:"green",
        borderColor:"black",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,        
    },
        txt:{
        fontSize: 20,
        fontWeight: 'bold', 
        marginBottom: 8,
    }
    }
);

export {Card}