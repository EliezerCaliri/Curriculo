import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import Botao from '../Componentes/botaointro';

const App = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../Imagens/Nerd.jpg')} style={styles.imagem} />

            <Text style={styles.intro1}>Olá, esse é o meu Curriculo</Text>
            <Text style={styles.intro}>Vulgo Caliri</Text>

        <Botao titulo ="Home" acao={() => navigation.navigate("Home")}/>
        <Botao titulo ="Dados" acao={() => navigation.navigate("Dados")}/>
        <Botao titulo ="Formacao" acao={() => navigation.navigate("Formacao")}/>
        <Botao titulo ="Experiencia" acao={() => navigation.navigate("Experiencia")}/>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    intro: {
        alignItems: 'center',
        marginBottom: 200,
        fontSize: 50,
    },
    imagem: {
        width: 200,
        height: 200,
    },
    textb:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    
    },
    intro1: {
        alignItems: 'center',
        fontSize: 50,
    },
});

export default App;