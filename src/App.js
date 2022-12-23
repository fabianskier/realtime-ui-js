import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const ALL_COUNTRIES = gql`
  query {
    countries {
      id,
      name,
      abbreviation
    }
  }
`

function App() {
  const { data, error, loading } = useQuery(ALL_COUNTRIES)

  if (error) return <span style='color: red'>{error}</span>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          loading 
          ? <p>Loading...</p>
          : (
            <>
              <p>Countries</p>
              {
                data && data.countries.map(country => country.name).join(', ')
              }
            </>
          )
        }
      </header>
    </div>
  );
}

export default App;
