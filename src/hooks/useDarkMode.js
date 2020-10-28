import useLocalStorage from "./useLocalStorage"

function useDarkMode() {
    const [enableDarkMode, setEnableDarkMode] = useLocalStorage('dark-mode', false)

    return [enableDarkMode, setEnableDarkMode]
}

export default useDarkMode