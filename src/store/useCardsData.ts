import {create} from "zustand"

type Card = {
  title: string
  priority: string
  status: string
}

type CardsData = {
  backlog: Card[]
  todo: Card[]
  inProgress: Card[]
  Done: Card[]
}

type store = {
  data: CardsData
  pushBacklog: (card: Card) => void
}

const useCardsData = create<store>((set) => ({
  data: {
    backlog: [],
    todo: [],
    inProgress: [],
    Done: [],
  },
  pushBacklog: (cards) => set((state) => ({
    data: {
      ...state.data,
      backlog: [
        ...state.data.backlog,
        ...(Array.isArray(cards) ? cards : [cards])
      ]
    }
  }))
}))

export default useCardsData