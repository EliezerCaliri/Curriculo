import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

const Dados = ({navigation}) =>{
    return (
        <View style={styles.container1}> 
            <Text style={styles.text}>Nome: Eliezer Caliri</Text>
            <Text style={styles.text}>Telefone: 1890234123</Text>
            <Text style={styles.text}>Email: Eliezerjc@gmail.com</Text>
            <Text style={styles.text}>Endereço: Primeiro de maio , 371</Text>
            <Text style={styles.text}>Sexo :Masculino</Text>
            <Text style={styles.text}>Relacionamento: Solteiro</Text>
            <Text style={styles.text}>Carteira de Habilitação: A,B</Text>

        <View style={styles.container}>
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textb}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Dados')}>
                <Text style={styles.textb}>Dados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Formacao')}>
                <Text style={styles.textb}>Formação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Formacao')}>
                <Text style={styles.textb}>Experiencia</Text>
            </TouchableOpacity>
        </View>
        </View>
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
export default Dados;