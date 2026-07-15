import React from 'react'
import ClientItem from '../Items/ClientItem'

export default function ClientsList({ clients }) {
    console.log(clients)
    return (
        clients.map((el) => <ClientItem key={el._id} item={el} />)
    )
}
