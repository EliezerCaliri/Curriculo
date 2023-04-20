import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Botao from '../Componentes/botaointro';

const Experiencia = ({navigation}) =>{
    return (
        <View style={styles.container1}> 
            <Text style={styles.text}>Fabrica de Cadeiras Veanholi (2015-2017)</Text>
            <Text style={styles.text}>Fabrica de Cadeiras Veanholi (2020-2021)</Text>
            <Text style={styles.text}>Fabrica de Cadeiras Continental (2019-2019)</Text>
            <Text style={styles.text}>Fabrica de Cadeiras Braga && Pina (2020-2020)</Text>
            <Text style={styles.text}>Fabrica de Rodos Puxe-Bem (2019-2020)</Text>
            <Text style={styles.text}>Fabrica de Moveis de Madeira Zamatta (2021-2022)</Text>
            <Text style={styles.text}>Fabrica de Moveis de Madeira Preguiçosa (2022-2023)</Text>

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
export default Experiencia;