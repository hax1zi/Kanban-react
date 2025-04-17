import useDarkModeStore from "../store/useDarkModeStore"

export default function Aside() {
  const { darkmode, toggleDarkMode } = useDarkModeStore()

  return (
    <aside className="bg-primary h-14 w-full flex items-center justify-between px-[15%]">
      <h1 className="text-xl font-bold">Kanban</h1>
      <button onClick={toggleDarkMode} className="p-2">
          {darkmode ? (
            <img src="icons/sun.svg" alt="" />
          ) : (
            <img src="icons/moon.svg" alt="" />
          )}
      </button>
    </aside>
  )
}