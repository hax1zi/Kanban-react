import type { CardType } from "../../types/card"

export default function Card({title, priority, status}: CardType, className: string) {
  const getPriorityColor = () => {
    switch (priority) {
      case "baixa":
        return "bg-done-border"
      case "media":
        return "bg-yellow-400"
      case "alta":
        return "bg-red-400"
    }
  }

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("application/json", JSON.stringify({
      title,
      priority,
      status
    }))
  }

  return (
    <div className={className + " relative break-words whitespace-pre-wrap mb-1 min-h-14 mx-1 pb-8 pt-2 leading-tight rounded px-2"} draggable onDragStart={handleDragStart}>
      <h3>{title}</h3>
      <div className="flex items-center gap-1 absolute bottom-2 right-2">
        <p className="capitalize text-xs font-medium">Prioridade {priority}</p>
        <div className={`w-4 h-4 rounded-full bg-black ${getPriorityColor()}`}/>
      </div>
    </div>
  )
}