import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from "react-native";

export  default function App(){
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const handleCalcular = () => {
    const height = parseFloat(altura) / 100;
    const weight = parseFloat(peso);

    const imc = weight / (height * height);

  
    if(imc < 20.7)
      return Alert.alert(
        "Abaixo do peso!",
        `Seu IMC é de ${imc.toFixed(2)}`
      );
      if(imc >= 20.7 && imc <= 26.4)
        return Alert.alert(
          "Normal!",
          `Seu IMC é de ${imc.toFixed(2)}`
        );  
        if(imc >= 26.4 && imc <= 27.8)
          return Alert.alert(
            "Pouco acima do peso!",
            `Seu IMC é de ${imc.toFixed(2)}`
          );
          if(imc >= 27.8 && imc <= 31.1)
            return Alert.alert(
              "Acima do peso!",
              `Seu IMC é de ${imc.toFixed(2)}`
            ); 
            if(imc > 31.1)
              return Alert.alert(
                "Obeso!",
                `Seu IMC é de ${imc.toFixed(2)}`
              );  
              };
  return(
    <View style={styles.container}>

    <Image source={require('./assets/balanca.webp')} style={{width:100, height:100}}/>
    

      <Text>Coloque sua altura</Text>
    <TextInput keyboardType="number-pad" value={altura} onChangeText={(text) => setAltura(text)} style={styles.input}  />
    <Text>Coloque seu peso</Text>
    <TextInput keyboardType="number-pad" value={peso} onChangeText={(text) => setPeso(text)} style={styles.input}  />


    <TouchableOpacity onPress={handleCalcular } style={styles.button}>

    <Text style={styles.buttonText }>Calcular</Text>

    </TouchableOpacity>

    <StatusBar style="auto"/>
    </View>
  )
} 

const styles = StyleSheet.create({

  container: {
    backgroundColor:'#B5D99C',
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',

  },
  input:{
    backgroundColor:'#F5F7DC',
    width:"70%" ,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal:16 ,
    marginTop: 5,
    borderWidth: 1,
  },
  button:{
    backgroundColor:'#7EA172',
    width:"50%",
    height: 50,
    justifyContent: "center",
    alignItems:"center",
    elevation:2,
    borderRadius:8,
    marginTop:16,
  },
  buttonText:{
    fontFamily:"Poppins_600SemiBold",
    color:"#FFF",
    fontSize: 12,
  }

});