import { Link } from "react-router-dom"



export default function NotificationModal(props) {
    return (
        <>
            <div className="modal">
                <div className="modal-container">
                    <h3 className="center bold text-center text-xl">{props.message}</h3>
                    <div className="modal-footer flex items-center justify-center p-4">
                        <Link to="/">
                            <button className="justify-center text-white text-l bg-transparent font-bold uppercase text-sm outline-none focus:outline-none ease-linear transition-all duration-150" onClick={props.action}>Close</button>
                        </Link>

                    </div>

                </div>
            </div>
        </>
    )
}