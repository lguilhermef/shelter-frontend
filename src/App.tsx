import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import AddShelterPage from './pages/AddShelter.page';
import MainPage from "./pages/Main.page";
import SearchShelterPage from "./pages/SearchShelter.page";
import MainLayout from "./shared/components/layouts/Main.layout";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    {/* <Route element={<MainLayout />}> </Route> */}
                    <Route path="/" element={<MainPage />} />
                    <Route path="/add-shelter" element={<AddShelterPage />} />
                    <Route path="/search-shelter" element={<SearchShelterPage />} />
                </Routes>

            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
