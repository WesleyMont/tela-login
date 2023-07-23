import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Image, TouchableOpacity,Button } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import React, { useState } from 'react';

export default function App() {
  const [input, setInput] = useState ('');
  const [ocultar, setOcultar] = useState (true);  
  const [trocar, setTrocar] =useState (true)
  
  const [emoji, setEmoji] = useState (['🙈']);

  const clicarBotao = () => {
    setTrocar(!trocar);
    if (trocar == false){
      setEmoji('🙈')
    }else if (trocar == true){
      setEmoji ('🐵')
    }
  }


  return (
    

    <View style={styles.container}>

      <Text style= {styles.emoji}> {emoji} </Text>
      
      <TextInput style={styles.inputEmail}
      placeholder='E-mail'
      placeholderTextColor={'#fff'}
      
      />
      
      
      <View style={styles.inputArea}>       
      
      <TextInput style={styles.inputSenha} 
      placeholder='Senha'
      placeholderTextColor={'#fff'}
      value={input}
      onChangeText={(texto) => setInput(texto)}
      secureTextEntry={ocultar} 
      />

      <TouchableOpacity style={styles.icon} onPress={() => setOcultar(!ocultar)}
      onPressIn={clicarBotao}>
      <Entypo name="eye-with-line" size={25} color="black" />
      
      </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emoji:{
   
    fontSize:110

  },

  inputEmail:{
    height:40,
    width:250,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'#87CEFA',
  },

   inputSenha: {
    height:40,
    width: 250,
    borderWidth: 1,
    margin:10,
    padding: 10,
    backgroundColor:'#87CEFA',   
    color:'#fff',
    left:12
  },


  inputArea:{
    
    flexDirection:'row',
    justifyContent:'center',
  },

  icon:{
    right:40,
    top:16.5
    
  }

});
