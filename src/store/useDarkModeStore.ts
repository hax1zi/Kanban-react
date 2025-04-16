import { create } from "zustand"


type DarkModeType = {
  darkmode: boolean
  toggleDarkMode: () => void
}
const useDarkModeStore = create<DarkModeType>((set) => ({
  darkmode: false,
  toggleDarkMode: () => set((state) => ({darkmode: !state.darkmode})),
}))

export default useDarkModeStore