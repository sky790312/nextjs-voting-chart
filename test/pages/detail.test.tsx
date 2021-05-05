import React from 'react'
import { render, withProviders } from '@/test/testUtils'
import { Detail } from '@/pages/detail'

describe('Detail page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(withProviders(<Detail />), {})
    expect(asFragment()).toMatchSnapshot()
  })
})
