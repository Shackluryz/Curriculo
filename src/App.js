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
import Card from './components/Card'

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
        <Card titulo="Formação Academica">
          <Text style={style.card_content_text}>Engenharia de Software - UniProjeção</Text>
          <Text style={style.card_content_text}>Desenvolvedor Mobile - Senai</Text>
        </Card>
        <Card titulo="Experiencia Profissional">
          <Text style={style.card_content_text}>Desenvolvedor - Fabrica de Softwares</Text>
          <Text style={style.card_content_text}>Estágio em TI - Senado Federal</Text>
        </Card>
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
    borderColor: 'white',
    borderWidth: 3,
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
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
  },
});
