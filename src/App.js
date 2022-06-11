import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './assets/perfil.jpg';

const App = () => {
  async function handleIcon(icon) {
    let url, res;
    switch (icon) {
      case 'linkedin':
        url = 'https://www.linkedin.com/in/shackluryz/';
        res = await Linking.canOpenURL(url);
        if (res) {
          console.log('Link aprovado');
          console.log('Abrindo');
          await Linking.openURL(url);
        }
        break;
      case 'github':
        url = 'https://github.com/Shackluryz';
        res = await Linking.canOpenURL(url);
        if (res) {
          console.log('Link aprovado');
          console.log('Abrindo');
          await Linking.openURL(url);
        }
        break;
      case 'twitter':
        url = 'https://twitter.com/shackluryz';
        res = await Linking.canOpenURL(url);
        if (res) {
          console.log('Link aprovado');
          console.log('Abrindo');
          await Linking.openURL(url);
        }
        break;
    }
  }

  return (
    <>
      <SafeAreaView style={style.page}>
        <View style={style.header}>
          <Image style={style.foto} source={foto} />
          <Text style={style.nome}>LUCAS RODRIGUES</Text>
          <Text style={style.funcao}>Fullstack, Mobile and Game Developer</Text>
          <View style={style.icons}>
            <TouchableOpacity onPress={() => handleIcon('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIcon('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIcon('twitter')}>
              <Icon name="twitter" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Experiencia Profissional</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>
                Desenvolvedor - Fabrica de Softwares
              </Text>
              <Text style={style.card_content_text}>
                Estágio em TI - Senado Federal
              </Text>
            </View>
          </View>
        </View>

        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Formação Academica</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>
                Engenharia de Software - UniProjeção
              </Text>
              <Text style={style.card_content_text}>
                Desenvolvedor Mobile - Senai
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 20,
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card_header: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '70%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF',
  },
  card_content: {
    marginTop: 20,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});
