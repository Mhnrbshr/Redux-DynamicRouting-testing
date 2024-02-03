import React from 'react'
import { useParams } from 'react-router'

const Dynamic = () => {

    const {placeholder} = useParams();

    return (
    <div>{placeholder}</div>
    )
}

export default Dynamic
