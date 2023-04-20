import React from 'react';
import {
    StyleSheet,
    View,
    Text,

} from 'react-native';
import Botao from '../Componentes/botaointro';

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
        <Botao titulo ="Home" acao={() => navigation.navigate("Home")}/>
        <Botao titulo ="Dados" acao={() => navigation.navigate("Dados")}/>
        <Botao titulo ="Formacao" acao={() => navigation.navigate("Formacao")}/>
        <Botao titulo ="Experiencia" acao={() => navigation.navigate("Experiencia")}/>
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
});
export default Dados;