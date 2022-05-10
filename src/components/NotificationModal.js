import { Link, useLocation } from "react-router-dom"



export default function NotificationModal(props) {
    const location = useLocation()
    return (
        <>
            <div
                className="">
                <div className="">
                    <h3 className="">{props.message}</h3>
                    <div className="">
                        <Link to="/">
                            <button className="" onClick={props.action}>Close</button>
                        </Link>

                    </div>

                </div>
            </div>
        </>
    )
}