/* eslint-disable @typescript-eslint/camelcase */
import styled from 'styled-components'
import { PoolSchema } from '@/api/schema'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import { FlexCenterContainer } from '@/GlobalStyles'

interface Props {
  item: PoolSchema
}

export const Item: React.FC<Props> = ({ item }) => {
  const router = useRouter()

  const goDetail = id =>
    router.push({
      pathname: '/detail',
      query: { id },
    })

  return (
    <ItemContainer onClick={() => goDetail(item.id)}>
      <div>img</div>
      <div>
        <h3>{dayjs(item.publishedDate).format('ll')}</h3>
        <p>{item.title}</p>
      </div>
    </ItemContainer>
  )
}

const ItemContainer = styled(FlexCenterContainer)`
  width: 100%;
  display: flex;
  padding: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  cursor: pointer;
`
