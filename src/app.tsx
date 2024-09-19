import { useEffect } from 'react';
import { useAppSelector } from './redux/hooks';


function App() {
    const darkMode = useAppSelector((state) => state.ui.darkMode)

    // handle body styling
    useEffect(() => {
        if (darkMode) {
            document.body.classList.remove('bg-gray-50')
            document.body.classList.add('bg-darkbackground')
        } else {
            document.body.classList.add('bg-gray-50')
            document.body.classList.remove('bg-darkbackground')
        }
    }, [darkMode])
}

export default App;
