import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const useProtectedPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (token === null) {
      console.log('Não está logado')
      history.push('/login')
    }

  }, [])
}


export const TripDetailsPage = () => {
    

useEffect(() => {

  const token = localStorage.getItem("token");

  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/antonio-machado-molina/trip/NoIFVcOiSgTKTIPVZwXS')
  .then((res) => {
    console.log(res.data)
  }).catch((err) => {
    console.log('Deu erro', err.response)
  })
}, [])

  return (
    <div>
        TripDetailsPage
         </div>
  );  
}

export default TripDetailsPage;
