import React from 'react';
import { View ,StyleSheet, TouchableWithoutFeedback,Text } from 'react-native';

const FormSelectorBtn = ({ title, backgroundColor }) => {
    return (
        <TouchableWithoutFeedback>
            <View style={[styles.container, { backgroundColor }]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
        container: {
                height: 45,
            width: "50%",
            backgroundColor: "rgb(255, 0, 0)",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10
        },

        title:{
        color: "white", 
        fontSize:16} 
        })
export default FormSelectorBtn