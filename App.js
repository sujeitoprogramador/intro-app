import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
  {
    key: '1',
    title: 'Fábrica de Aplicativos',
    text: 'Aprenda desenvolver aplicativos do extremo zero, usando as tecnologias mais modernas do mercado.',
    image: require('./src/assets/1.png')
  },
  {
    key: '2',
    title: '100% NA PRÁTICA',
    text: 'Você vai aprender a desenvolver aplicativos e sistemas completos usando React Native e React JS',
    image: require('./src/assets/2.png')
  },
  {
    key: '3',
    title: 'CURSO FOCADO NO MERCADO',
    text: 'Um treinamento totalmente na prática, direto ao ponto com as tecnologias que usamos atualmente no mercado!',
    image: require('./src/assets/3.png')
  },
];

export default function App() {
  const [showHome, setShowHome] = useState(false);

  function renderSlides({ item }){
    return(
      <View style={{flex:1}}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%',
          }}
        />
        <Text 
        style={{
          paddingTop: 25,
          paddingBottom: 10,
          fontSize: 23,
          fontWeight: 'bold',
          color: '#009CFF',
          alignSelf: 'center'
        }}>
          {item.title}
        </Text>

        <Text
        style={{
          textAlign: 'center',
          color: '#b5b5b5',
          paddingHorizontal: 25,
          fontSize: 15
        }}
        >
          {item.text}
        </Text>
      </View>
    )
  }


 if(showHome){
   
   return <Text>ENTROU NA HOME</Text>

 } else{
  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#009CFF',
        width: 30
      }}
      renderNextButton={ () => {}}
      renderDoneButton={ () => <Text style={{fontSize: 20}}>Acessar!</Text>}
      onDone={ () => alert('ENTROU NO APP')}
    />
   );
 }
}