import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const COUNTRY = gql`
  query {
    country(id: 2) {
      id,
      name,
      abbreviation
    }
  }
`

function App() {
  const { data, error, loading } = useQuery(COUNTRY)

  if (error) return <span style='color: red'>{error}</span>

  console.log(data)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          loading 
          ? <p>Loading...</p>
          : (
            <>
              <p>Country</p>
              {
                data && data.country.name
              }
            </>
          )
        }
      </header>
    </div>
  );
}

export default App;
