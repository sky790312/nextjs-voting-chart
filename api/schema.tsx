export interface PoolSchema {
  answer: AnswerSchema
  id: number
  publishedDate: number
  title: string
}

export interface AnswerSchema {
  type: 'Single' | 'Multi'
  options: {
    id: number
    label: string
  }[]
}
