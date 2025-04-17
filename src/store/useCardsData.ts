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
  done: Card[]
}

type store = {
  data: CardsData
  pushBacklog: (card: Card) => void
  moveCard: (card: Card, targetStatus: string) => void
}

const useCardsData = create<store>((set) => ({
  data: {
    backlog: [],
    todo: [],
    inProgress: [],
    done: [],
  },
  pushBacklog: (cards) => set((state) => ({
    data: {
      ...state.data,
      backlog: [
        ...state.data.backlog,
        ...(Array.isArray(cards) ? cards : [cards])
      ],
    }
  })),
  moveCard: (card: Card, targetStatus: string) => set((state) => {
    
    const newData: CardsData = {
      backlog: state.data.backlog.filter((c) => c.title !== card.title),
      todo: state.data.todo.filter((c) => c.title !== card.title),
      inProgress: state.data.inProgress.filter((c) => c.title !== card.title),
      done: state.data.done.filter((c) => c.title !== card.title),
    }

    newData[targetStatus as keyof CardsData].push({ ...card, status: targetStatus })

      return { data: newData }
  })
}))

export default useCardsData