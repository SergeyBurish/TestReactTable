import {useState, useMemo} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);

  const onChange = (e) => {
    const count = e.target.value;
    if (count > 0) setCount(count);
  };

  const getRows = () => {
    const rows = [];
    for (let i = 0; i < count; i++){
      const row = <tr key = {i}>
                    <td>{i}</td>
                    <td>{`Name ${i}`}</td>
                    <td>Img</td>
                  </tr>

      rows.push(row);
    }
    return rows;
  };

  const rows = useMemo(
    () => getRows(), [count]);

  return (
    <div className="App">
      <header className="App-header">
        <input type="number" value={count} onChange={onChange}/>
      </header>
      <div className="content">
        <div className="table-container">
          <table>
            <thead><tr>
              <th>Ind</th><th>Name</th><th>Image</th>
            </tr></thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
