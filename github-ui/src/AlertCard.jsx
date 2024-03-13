
import { useNavigate, useParams } from 'react-router-dom';


export function AlertCard() {
    const error = useParams()


    return (
        <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <h1>hola mundo</h1>
        </div>
    )
}