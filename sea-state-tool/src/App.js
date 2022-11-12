import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header';
import { HOME, TOOL, ABOUT } from './utils/constants'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header currentPage={HOME} />} />
                <Route path="/tool" element={<Header currentPage={TOOL} />} />
                <Route path="/about" element={<Header currentPage={ABOUT} />} />
            </Routes>
        </BrowserRouter>    
    );
}

export default App;
