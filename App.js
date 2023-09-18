import React, { useState } from "react";
import {View, Text, TextInput,  Button,StyleSheet,  Switch, } from "react-native";

export default function HelloWorldApp() {
  const [value, onChangeText] = React.useState("");
  const [isEnabled, setIsEnabled]= useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [color, setColor] = useState("black");
  // Task 1 and Task 2
  const toggleMode =()=>{
    setIsEnabled(prev => !prev)
    setBgColor(isEnabled ? 'white': 'black')
    setColor(isEnabled ? 'black': 'white')
  }
  return (
    <View style={{...styles.container, backgroundColor:bgColor}}>
      <TextInput
        style={{...styles.edit, color: color, }}
      
        onChangeText={(text) => onChangeText(text)}
        placeholder="Input your text"
        placeholderTextColor={color}
        value={value}
      />
      <Text style={{...styles.edit, color: color }} >{value}</Text>
      <Button
        style={styles.button}
        onPress={() => onChangeText("")}
        title="Clear"
      />
      <Switch onValueChange={toggleMode} value={isEnabled}></Switch>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  edit: {
    padding:30,
    fontSize: 30,
  },
});


