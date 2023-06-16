import React from 'react';
import { useState } from 'react';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const MyComponent = ({ data }) => {
    const [page, setPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);


    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Gastos</DataTable.Title>
                <DataTable.Title>Categoria</DataTable.Title>
                <DataTable.Title numeric>Monto</DataTable.Title>
            </DataTable.Header>

            {
                data

                    ?

                    data.map(({ name, category, amount }) => (
                        <DataTable.Row key={name + amount}>
                            <DataTable.Cell>{name}</DataTable.Cell>
                            <DataTable.Cell>{category}</DataTable.Cell>
                            <DataTable.Cell numeric>{`${amount} $`}</DataTable.Cell>
                        </DataTable.Row>

                    ))
                    :

                    <DataTable.Row>
                        <DataTable.Cell>Gasto</DataTable.Cell>
                        <DataTable.Cell numeric>categoria</DataTable.Cell>
                        <DataTable.Cell numeric>Monto</DataTable.Cell>
                    </DataTable.Row>
            }


            <DataTable.Pagination
                page={page}
                numberOfPages={3}
                onPageChange={(page) => setPage(page)}
                label="1-2 of 6"
                optionsPerPage={optionsPerPage}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
                showFastPagination
                optionsLabel={'Rows per page'}
            />
        </DataTable>
    );
}

export default MyComponent;