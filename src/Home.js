import { View, Text } from 'react-native'
import React, { useState } from 'react';

//styles
import { Button } from 'react-native-paper';


//components
import { DataTable } from "./components/index";

export default function Home({ navigation }) {

  //test data from table
  const [expenses, setExpenses] = useState([
    {
      name: "Deposito",
      category: "ingresos",
      amount: 400
    },
    {
      name: "Alquiler",
      category: "Casa",
      amount: 150
    }, {
      name: "Mercado",
      category: "Casa",
      amount: 100
    }, {
      name: "Netflix",
      category: "entretenimiento",
      amount: 10
    }, {
      name: "Luz",
      category: "Servicio",
      amount: 80
    }
  ]);

  return (
    <View>
      <Text >Gastos</Text>
      <DataTable data={expenses} />
      <Button onPress={() => navigation.navigate("Record")} >
        Nuevo
      </Button>
      <Button onPress={() => navigation.navigate("Settings")}>
        Ajustes
      </Button>
    </View>
  )
}