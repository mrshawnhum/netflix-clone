import React from 'react'
import { Container, Inner } from './styles/jumbotron'

export default function Jumbotron({ children, diection = 'row', ...restProps }) {
    return (
        <Inner direction={diection}>
            {children}
        </Inner>
    )
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}