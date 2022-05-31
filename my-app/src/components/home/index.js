import axios from "axios";
import Usuario from '../usuario/index';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"



const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});





const Home = () =>{

    const [usuarios, setUsuarios] = useState([]);

    const [tablaUsuarios, setTablaUsuarios] = useState([]);
    const [busqueda, setBusqueda] = useState("");
  
  
  
  
    const peticionGet = (username = 'YOUR_NAME') => {
      axios.get(`https://api.github.com/search/users?q=${username}`,
        {
          params: {
            per_page: 10
          }
        }
  
      )
        .then((response) => {
  
          setUsuarios(response.data.items)
          console.log('usuarios', usuarios)
          //console.log(response.data);
  
  
        }).catch(error => {
          console.log(error);
        })
    }
  
  
    useEffect(() => {
      peticionGet();
    }, [])
  
  
    const handlerChange = e => {
      if ((e.target.value).length > 4 && (e.target.value) != 'iseijasunow') {
        setBusqueda(e.target.value)
        filtrar(e.target.value);
      }
  
    }
    const filtrar = (terminBusqueda) => {
      peticionGet(terminBusqueda);
  
    }



return (
    <>
        <div className='container-input'>
            <input placeholder="Enter Post Title" onChange={handlerChange} />
            <button className='sned-request-button'>Search</button>
        </div>

        <div className="table-wrapper">

            <table className="data-table">

                <thead>
                    <tr>
                        <th>a</th>
                        <th>b</th>

                    </tr>
                </thead>
                <tbody>


               

{usuarios &&
    usuarios.map((usuario) => (
        <tr key={usuario.id}>
            <Link to={`/usuario/${usuario.login}`}>
                <td>{usuario.id}</td>


                <td>{usuario.login}</td>

            </Link>
        </tr>


    ))}
<Routes>

    <Route path="/usuario/:login" element={<Usuario />}>

    </Route>

</Routes>



                </tbody>
            </table>

        </div>
        <canvas id="myChart" width="400" height="400"></canvas>
    
    </>
    )


                            }

                            export default Home;