import { useState } from "react"
import useDarkModeStore from "../../store/useDarkModeStore"
import useCardsData from "../../store/useCardsData"
import type { CardType } from "../../types/card"

export default function CreateCard() {
  const { darkmode } = useDarkModeStore()
  
  const { pushBacklog } = useCardsData()
  const [isCreatingCard, setIsCreatingCard] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string | undefined>()
  const [selectValue, setSelectValue] = useState<string | undefined>()

  const handleAddCard = () => {
    if (inputValue !== "" && inputValue !== undefined) {
      const newCard: CardType = {
        title: inputValue,
        priority: selectValue || "baixa",
        status: "backlog"
      }
      pushBacklog(newCard)
    } 
    setIsCreatingCard(false)
  }
   return (
    <div onClick={() => setIsCreatingCard(true)} className={`${isCreatingCard ? "h-32" : "h-12"} duration-100 bg-backlog dark:bg-backlog-dark m-2 flex justify-center rounded transition-[height] shadow-md hover:outline outline-backlog-dark/70 dark:outline-backlog/70`}>
      {isCreatingCard ? (
        <form className="w-full" onSubmit={() => handleAddCard()} onClick={(e) => e.stopPropagation()}>
          <input name="title" onChange={(event) => setInputValue(event.target.value)} value={inputValue} placeholder="Insira um titulo" type="text" className="w-full h-10 outline-none bg-backlog-dark dark:placeholder:text-primaryText/80 dark:bg-backlog text-white p-2 rounded-t-sm overflow-scroll dark:text-primaryText" />
          <div className="px-2">
            <div className="flex justify-between my-3">
              <h4 className="text-sm font-medium">Prioridade:</h4>
              <select onChange={(event) => setSelectValue(event.target.value)} name="priority" value={selectValue} className="outline-none dark:bg-backlog-dark dark:text-primaryText-dark  bg-backlog">
                <option value="baixa">Baixa</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
              </select>
            </div>
            <div>
              <button className="p-[6px] mr-2 bg-backlog-dark text-primaryText-dark dark:bg-backlog dark:text-primaryText rounded-md hover:bg-neutral-700 dark:hover:bg-neutral-700 dark:hover:text-primaryText-dark transition-colors">adicionar</button>
              <button onClick={() => setIsCreatingCard(false)}>Cancelar</button>
            </div>
          </div>
        </form>
      ) : (
        <img className="cursor-pointer" src={ darkmode ? "/icons/plus-white.svg" : "/icons/plus.svg"} alt="" />
      )}
    </div>
  )
}