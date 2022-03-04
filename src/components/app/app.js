import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {

    const data = [
        {name: 'Vlad M.', salary: 300, increase: true, id: 1},
        {name: 'John C.', salary: 800, increase: false, id: 2},
        {name: 'Alex S.', salary: 650, increase: false, id: 3},
        {name: 'Andrii Z.', salary: 1200, increase: false, id: 4}
    ]

    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data }/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;