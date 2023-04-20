import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Botao from '../Componentes/botaointro';

const Formacao = ({navigation}) =>{
    return (
        <View style={styles.container1}> 
            <Text style={styles.text}>Ensino médio completo em Waldemaz Queiroz(2015)</Text>
            <Text style={styles.text}>Desenvolvimento de sistemas (2/3)</Text>
            <Text style={styles.text}>Curso de desenvolvimento SCRUM</Text>
            <Text style={styles.text}>Curso de Balconista de farmácia</Text>

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
export default Formacao;