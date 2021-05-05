import React from 'react'
import { PoolSchema } from '@/api/schema'
import { getDonutChartData } from '@/utils'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Doughnut } from 'react-chartjs-2'

interface Props {
  poll: PoolSchema
}

export const TopicSection: React.FC<Props> = React.memo(({ poll }) => {
  const donutChartConfig = {
    labels: poll?.answer.options.map(option => option.label),
    data: poll?.answer.options.map((option, index) => (index + 1) * 10),
  }
  const data = getDonutChartData(donutChartConfig)

  const handleAnswer = e => {
    console.log(e.target.value)
  }

  return (
    <TopicSectionContainer>
      <div>
        <h3>Today&apos;s Poll</h3>
        <p>
          {poll?.title}
          <span>{dayjs(poll?.publishedDate).format('ll')}</span>
        </p>
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
        <p>total number of votes recorded: </p>
      </div>
      <div>
        <Doughnut data={data} />
      </div>
    </TopicSectionContainer>
  )
})

const TopicSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${props => props.theme.colors.gray};

  @media (min-width: 1140px) {
    flex-direction: row;

    > div {
      width: 50%;
    }
  }
`
