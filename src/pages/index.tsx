import axios from 'axios';
import { Header } from '../components/Header';

axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
  .then(response => {
    console.log(response.data);
  }, error => {
    console.log(error);
  });

const Home = () => {
  return (
    <Header />
  )
}

export default Home
