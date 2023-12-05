import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Atropos from 'atropos/react'
import 'atropos/css'
import '../App.scss'

const formatDateDifference = (dateString: string | number | Date) => {
    const createdDate = new Date(dateString);
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - createdDate.getTime(); const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    const years = Math.floor(differenceInDays / 365);
    const months = Math.floor((differenceInDays % 365) / 30);
    const days = Math.floor((differenceInDays % 365) % 30);
    return `User since: ${years} years y ${months} months (~${days} days)`;
};

const formatDate = (dateString: string | number | Date) => {

    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });
    return formattedDate;
}

const UserDetail = () => {


    type User = {
        avatar_url: string;
        login: string;
        bio: string;
        public_repos: number;
        public_gists: number;
        followers: number;
        following: number;
        updated_at: string;
        id: number;
        name: string;
        company: string;
        location: string;
        twitter_username: string;
        created_at: string;
    };


    const { login } = useParams();
    const [user, setUser] = useState<User | null>(null); const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                const config = {
                    headers: { Authorization: `token ${import.meta.env.VITE_API_TOKEN}` }
                };
                const response = await axios.get(`https://api.github.com/users/${login}`, config);
                setUser(response.data);
                setError(null);
            } catch (error: any) {
                setError(error.toString());
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [login]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!user) return null;

    return (
        <div className="user-detail-wrapper">
            <Atropos className="user-detail-atropos" activeOffset={30} shadowScale={1.05}>
                <article className="user-detail-card">
                    <figure className="user-detail-image">
                        <img src={user.avatar_url} alt={user.login} />
                        <h2>{user.login}</h2>
                        <p>Bio: {user.bio}</p>
                    </figure>
                    <section className="user-detail-stats">
                        <p>Public Repos: {user.public_repos}</p>
                        <p>Public Gists: {user.public_gists}</p>
                    </section>
                    <section className="user-detail-stats">
                        <p>Followers: {user.followers}</p>
                        <p>Following: {user.following}</p>
                    </section>
                    <section className="user-detail-info">
                        <p>Last activity: {formatDate(user.updated_at)}</p>
                        <p>ID: {user.id}</p>
                        <p>Name: {user.name}</p>
                        <p>Company: {user.company}</p>
                        <p>Location: {user.location}</p>
                        <p>Twitter: {user.twitter_username}</p>
                    </section>
                    <section className="user-detail-timestamps">
                        <p>{formatDateDifference(user.created_at)}</p>
                    </section>
                </article>
            </Atropos>
        </div>
    );
};

export default UserDetail;
