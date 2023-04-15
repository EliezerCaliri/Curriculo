import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

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
        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.textb}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Dados')}>
                <Text style={styles.textb}>Dados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Formacao')}>
                <Text style={styles.textb}>Formação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Experiencia')}>
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
export default Experiencia;