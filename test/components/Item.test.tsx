import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { Item } from '@/components/home/Item'
import { PoolSchema } from '@/api/schema'

describe('Item component', () => {
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
    const { asFragment } = render(withProviders(<Item item={item} />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
