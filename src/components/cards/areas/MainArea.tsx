import useCardsData from "../../../store/useCardsData";
import Card from "../Card";
import CreateCard from "../CreateCard";
import AddArea from "./AddArea";

export default function MainArea() {
  const {data} = useCardsData()
  const {moveCard} = useCardsData()

  return (
    <div className="h-full flex gap-5 flex-row m-4 rounded-lg shadow-lg ">
      <AddArea width="350px">
        <div className="h-full w-full box-border flex flex-col shadow-md" onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const droppedData = e.dataTransfer.getData("application/json")

            const card = JSON.parse(droppedData)
            moveCard(card, "backlog")
          }}>
          <div className="bg-backlog dark:bg-backlog-dark h-14 p-4 rounded-t-lg">
            <h2 className="font-medium">Backlog</h2>
          </div>
          <CreateCard/>
          {data.backlog.map((card, index) => (
            <Card status={card.status} key={index} className=" dark:bg-backlog-dark bg-backlog" priority={card.priority} title={card.title}/>
          ))}
        </div>
      </AddArea>
      
      <AddArea width="99%" >
        <div className="h-full w-full flex">
          <div className="h-full w-[33.333%] shadow-md" onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const droppedData = e.dataTransfer.getData("application/json")

            const card = JSON.parse(droppedData)
            moveCard(card, "todo")
          }}
          >
            <div className="bg-todo dark:bg-todo-dark h-14 p-4 rounded-tl-lg">
              <h2 className="font-medium">Para fazer</h2>
            </div>
            {data.todo.map((card, index) => (
            <Card status={card.status} key={index} className=" dark:bg-backlog-dark mt-2 bg-backlog" priority={card.priority} title={card.title}/>
          ))}
          </div>
          <div className="h-full w-[33.333%] shadow-md">
            <div className="bg-inProgress dark:bg-inProgress-dark h-14 p-4">
              <h2 className="font-medium">Em progresso</h2>
            </div>
          </div>
          <div className="h-full w-[33.333%] shadow-md" >
            <div className="bg-done dark:bg-done-dark h-14 p-4 rounded-tr-lg">
              <h2 className="font-medium">Feito</h2>
            </div>
          </div>
        </div>
      </AddArea>
    </div>
  )
}