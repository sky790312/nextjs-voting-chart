import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { Container } from '@/GlobalStyles'
import { fetchPolls } from '@/api'
import { PoolSchema } from '@/api/schema'
import { Item } from '@/components/home/Item'
import { TopicSection } from '@/components/home/TopicSection'

export const Home = React.memo(
  (): JSX.Element => {
    const [polls, setPolls] = useState<PoolSchema[]>([])
    const [topicPoll, ...restPolls] = polls

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchPolls()
          setPolls(data.polls)
        } catch (error) {
          console.log(error)
        }
      }

      fetchData()
    }, [])

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Container>
          <TopicSection poll={topicPoll} />
          <PollListContainer>
            {restPolls?.map(poll => (
              <Item key={poll.id} item={poll} />
            ))}
          </PollListContainer>
        </Container>
      </>
    )
  },
)

export default Home

const PollListContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 1140px) {
    div {
      width: 50%;
    }
  }
`
