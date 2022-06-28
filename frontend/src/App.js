import './App.css'
import TableComponent from './components/table.component'

import { useDispatch } from 'react-redux'
import { getCustomers } from './redux/customerSlice'
import axios from './axios/axios'

function App() {
    const dispatch = useDispatch()

    axios
        .get('/getAllCustomers')
        .then((response) => {
            dispatch(getCustomers(response.data))
        })
        .catch((err) => console.log(err))

    return (
        <div className='App bg-slate-800 h-screen '>
            <header className='App-header'>
                <TableComponent />
            </header>
        </div>
    )
}

export default App
