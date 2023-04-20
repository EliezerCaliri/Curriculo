import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

const Botao = ({titulo, acao}) => {
    return (
        <TouchableOpacity style={styles.botao} onPress=  { acao } >
                <Text style={styles.textb}>{ titulo }</Text>
            </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'left',
        alignItems: 'left',
    },
    container:{
        alignItems: 'center',
        justifyContent:'center',
    },
    text: {
        fontSize: 20,
        margin: 3,
    },
    botao: {
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        width: 200,
    },
    textb:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    
    }
});
export default Botao;