import { View, Text, Button } from 'react-native'
import React from 'react';
import { useState } from 'react';

//components
import DataTable from "./Components/DataTable";

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
      <Button title="Go to Settings" onPress={() => navigation.navigate("Settings")} />
      <Button title="Go to About" onPress={() => navigation.navigate("About")} />
    </View>
  )
}