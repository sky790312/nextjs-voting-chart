import * as fakeData from '@/api/poll.json'

export const fetchPolls = async () => {
  const data = (await (fakeData as any)?.default) ?? {}
  return data
}

export const fetchPoll = async (id: number) => {
  const data = (await (fakeData as any)?.default) ?? {}
  const poll = data.polls.find(poll => poll.id === id)
  return poll
}
