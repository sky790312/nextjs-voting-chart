import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { TopicSection } from '@/components/home/TopicSection'
import { PoolSchema } from '@/api/schema'

describe('TopicSection component', () => {
  it('matches snapshot', () => {
    const item: PoolSchema = {
      id: 0,
      title: 'test',
      publishedDate: 123123,
      answer: {
        type: 'Single',
        options: [
          {
            id: 1,
            label: 'test answer',
          },
        ],
      },
    }
    const { asFragment } = render(
      withProviders(<TopicSection poll={item} />),
      {},
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
