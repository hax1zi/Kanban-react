import AddArea from "./AddArea";

export default function MainArea() {
  return (
    <div className="h-full flex gap-5 flex-row m-4 rounded-lg shadow-lg ">
      <AddArea width="350px">
        <div className="h-full">
          <div className="bg-backlog dark:bg-backlog-dark h-14 p-4 rounded-t-lg">
            <h2>Backlog</h2>
          </div>
        </div>
      </AddArea>
      <AddArea width="99%" >
        <div className="h-full w-full flex">
          <div className="h-full w-[33.333%]">
            <div className="bg-todo dark:bg-todo-dark h-14 p-4 rounded-tl-lg">
              <h2>Para fazer</h2>
            </div>
          </div>
          <div className="h-full w-[33.333%]">
            <div className="bg-inProgress dark:bg-inProgress-dark h-14 p-4">
              <h2>Em progresso</h2>
            </div>
          </div>
          <div className="h-full w-[33.333%]">
            <div className="bg-done dark:bg-done-dark h-14 p-4 rounded-tr-lg">
              <h2>Feito</h2>
            </div>
          </div>
        </div>
      </AddArea>
    </div>
  )
}