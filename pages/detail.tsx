import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import { fetchPoll } from '@/api'
import { PoolSchema } from '@/api/schema'
import dayjs from 'dayjs'
import { Doughnut } from 'react-chartjs-2'
import { useRouter } from 'next/router'
import { getDonutChartData } from '@/utils'
import { Container } from '@/GlobalStyles'

export const Detail = React.memo(
  (): JSX.Element => {
    const router = useRouter()
    const pollId = router.query.id
    const [poll, setPoll] = useState<PoolSchema>()
    // const [userAnswer, setUserAnswer] = useState<string>()

    const donutChartConfig = {
      labels: poll?.answer.options.map(option => option.label),
      data: poll?.answer.options.map((option, index) => (index + 1) * 10),
    }
    const data = getDonutChartData(donutChartConfig)

    // TODO: fake data, should using poll answer data.
    const total = data?.datasets[0].data?.reduce((acc, cur) => {
      acc += cur
      return acc
    }, 0)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchPoll(Number(pollId))
          setPoll(data)
        } catch (error) {
          console.log(error)
        }
      }

      fetchData()
    }, [pollId])

    // useEffect(() => {
    //   // const foundAnswerIndex =  poll?.answer.options.findIndex(answer => answer.label === userAnswer)
    //   // TODO: here should update poll data's answer value
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [userAnswer])

    const handleAnswer = e => {
      // const answer = e.target.value
      // setUserAnswer(answer)
      // TODO: here should update poll data's answer value, not using fake userAnwser and it will rerender chart and total votes.
    }

    return (
      <>
        <Head>
          <title>Create Next App</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <DetailContainer>
          <div>
            <h1>{poll?.title}</h1>
            <StyledPublishedDate>
              Publish: {dayjs(poll?.publishedDate).format('LLLL')}
            </StyledPublishedDate>
            <div>
              {poll?.answer.options.map(option => (
                <span key={option.id}>
                  <input
                    type={poll?.answer.type === 'Single' ? 'radio' : 'checkbox'}
                    id={String(option.id)}
                    value={option.label}
                    name={String(poll?.id)}
                    onChange={handleAnswer}
                  />
                  <label htmlFor={String(option.id)}>{option.label}</label>
                </span>
              ))}
            </div>
            <p>total number of votes recorded: {total}</p>
          </div>
          <div>
            <Doughnut data={data} />
          </div>
        </DetailContainer>
      </>
    )
  },
)

export default Detail

const DetailContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.blue};

  @media (min-width: 1140px) {
    div {
      width: 50%;
    }
  }
`

const StyledPublishedDate = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid ${props => props.theme.colors.gray};
  padding-top: 10px;
`
