import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const Container = styled.div`
  background: black;
`

const Home: NextPage = () => {
  return (
    <Container>
     hello
    </Container>
  )
}

export default Home
