type CardProps = {
  title: string
  className: string
}

export default function Card({title, className}: CardProps) {
  return (
    <div className={className + " break-words whitespace-pre-wrap mb-1 mx-1 pb-4 pt-2 leading-tight rounded px-2"}>
      <h3>{title}</h3>
    </div>
  )
}