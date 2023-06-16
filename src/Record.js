import { View, Text } from 'react-native'
import React from 'react'

//component
import { ExpenseForm } from './components/index';

export default function Record() {
    return (
        <View>
            <Text>Record expense</Text>
            <ExpenseForm />
        </View>
    )
}