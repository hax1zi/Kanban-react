type AddAreaProps = {
  width: string
  children?: React.ReactNode
}

export default function AddArea({width, children}: AddAreaProps) {
  return (
    <div className="h-full bg-card dark:bg-card-dark rounded-xl" style={{ width }}>
        {children && children} 
    </div>
  )
}