import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Footer from "../components/Footer";
import Head from "../components/Head";
import axios from "axios";

interface Carros {
    id: number;
    modelo: string;
    ano: string;
    maca: number;
    cor: string;
    peso: string;
    potencia: string;
    descricao: string;
    preco: string

}

const EditarProduto: React.FC = () => {
    const [id, setId] = useState<string>('');
    const [modelo, setModelo] = useState<string>('');
    const [ano, setAno] = useState<string>('');
    const [marca, setMarca] = useState<string>('');
    const [cor, setCor] = useState<string>('');
    const [peso, setPeso] = useState<string>('');
    const [potencia, setPotencia] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [preco, setPreco] = useState<string>('');

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {

     const {item} = route.params;
         setId(item.id)
        setModelo(item.modelo);
        setAno(item.ano);
        setMarca(item.marca);
        setCor(item.cor);
        setPeso(item.peso);
        setPotencia(item.potencia);
        setDescricao(item.descricao);
        setPreco(item.preco);
    },[])

    const atualizar = () => {
        const dadosDoCarro = {
            id: id,
            modelo: modelo,
            ano: ano,
            marca: marca,
            cor: cor,
            peso: peso,
            potencia: potencia,
            descricao: descricao,
            preco: preco,
        };
        axios.put("http://10.137.11.229:8000/api/carros/update", dadosDoCarro, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.log(response.data);
            navigation.goBack(); // Redireciona para a tela anterior após a atualização bem-sucedida
        }).catch(error => {
            console.error(error);
        });
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content" />
            <Head/>

            <View style={styles.container}>
            <TextInput value={modelo}
                 onChangeText={setModelo}
                  style={styles.input} />

                <TextInput value={ano}
                 onChangeText={setAno}
                  keyboardType="numeric"
                   style={styles.input} />

                <TextInput value={marca}
                 onChangeText={setMarca}
                  style={styles.input} />

                <TextInput value={cor}
                 onChangeText={setCor}
                  style={styles.input} />

                <TextInput value={peso}
                 onChangeText={setPeso}
                  style={styles.input} />

                <TextInput value={potencia}
                 onChangeText={setPotencia}
                  style={styles.input} />

                <TextInput value={descricao}
                 onChangeText={setDescricao}
                  multiline
                   style={styles.input} />

                <TextInput value={preco}
                 onChangeText={setPreco}
                  keyboardType="numeric"
                   style={styles.input} />

                <TouchableOpacity onPress={atualizar} style={styles.button}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>

            </View>
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        margin: 10,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    button: {
        backgroundColor: '#3a415a',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        borderColor: 'white'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});



export default EditarProduto;