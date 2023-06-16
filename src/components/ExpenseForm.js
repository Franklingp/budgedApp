import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import { Button, TextInput } from 'react-native-paper'

export default function ExpenseForm() {
    const title = useRef();
    const category = useRef();
    const amount = useRef();

    const onSubmit = () => {
        console.log({
            title: title.current.value,
            category: category.current.value,
            amount: amount.current.value
        });
    }

    return (
        <View>
            <Text>ExpenseForm</Text>
            <TextInput
                ref={title}
                mode="flat"
                onSubmitEditing={() => category.current.focus()}
                // error={error}
                returnKeyType='next'
                label="Titulo"
                keyboardType='default'
            />
            <TextInput
                ref={category}
                mode="flat"
                onSubmitEditing={() => amount.current.focus()}
                // error={error}
                returnKeyType='next'
                label="Tiempo"
                keyboardType='numeric'
            />
            <TextInput
                ref={amount}
                mode="flat"
                onSubmitEditing={() => onSubmit()}
                // error={error}
                returnKeyType='send'
                label="Monto"
                keyboardType='numeric'
            />
            <Button>Guardar</Button>
            <Button>Cancelar</Button>
        </View>
    )
}