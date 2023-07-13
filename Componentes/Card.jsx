import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

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
        padding: 18,
    },
    imagen:{
        width:300, 
        height:300,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,       
    },
    txtContain:{
        alignItems: 'center',
        backgroundColor:"green",
        borderColor:"black",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,        
    },
        txt:{
        fontSize: 20,
        color:"white",
        fontWeight: 'bold', 
        marginBottom: 10,
    }
    }
);

export {Card}