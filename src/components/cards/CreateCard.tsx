import { useState } from "react"
import useDarkModeStore from "../../store/useDarkModeStore"
import useCardsData from "../../store/useCardsData"

type card = {
  title: string
  priority: string
  status: string
}

export default function CreateCard() {
  const { darkmode } = useDarkModeStore()

  const [addButtonActived, setAddButtonActived] = useState<boolean>(false)
  const [createCard, setCreateCard] = useState<card>()
  const { data, pushBacklog } = useCardsData()

  const handleChangeInput = (e: any) => {
    setCreateCard(prev => ({
      ...prev,
      title: e.target.value
    } as card))
  }

  const handleChangeSelect = (e: any) => {
    setCreateCard(prev => ({
      ...prev,
      priority: e.target.value
    } as card))
  } 

  const handleAddCard = () => {
    const newCard: card = {
      title: createCard?.title || "",
      priority: createCard?.priority || "baixa",
      status: "backlog"
    }

    pushBacklog(newCard)
    console.log(data)
    setAddButtonActived(false)
  }
   return (
    <div onClick={() => setAddButtonActived(true)} className={`${addButtonActived ? "h-32" : "h-12"} duration-100 bg-backlog dark:bg-backlog-dark m-2 flex justify-center rounded transition-[height] shadow-md`}>
      {addButtonActived ? (
        <form className="w-full" onSubmit={(e) => e.preventDefault()} onClick={(e) => e.stopPropagation()}>
          <input onChange={handleChangeInput} placeholder="Insira um titulo" type="text" className="w-full h-10 outline-none bg-backlog-dark dark:placeholder:text-primaryText/80 dark:bg-backlog text-white p-2 rounded-t-sm overflow-scroll dark:text-primaryText" />
          <div className="px-2">
            <div className="flex justify-between my-3">
              <h4 className="text-sm font-medium">Prioridade:</h4>
              <select onChange={handleChangeSelect} name="priority" value={createCard?.priority || ''} className="outline-none dark:bg-backlog-dark dark:text-primaryText-dark  bg-backlog">
                <option value="baixa">Baixa</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </select>
            </div>
            <div>
              <button onClick={() => handleAddCard()} className="p-[6px] mr-2 bg-backlog-dark text-primaryText-dark dark:bg-backlog dark:text-primaryText rounded-md">adicionar</button>
              <button onClick={() => setAddButtonActived(false)}>Cancelar</button>
            </div>
          </div>
        </form>
      ) : (
        <img className="cursor-pointer" src={ darkmode ? "/icons/plus-white.svg" : "/icons/plus.svg"} alt="" />
      )}
    </div>
  )
}