import { useEffect, useState } from 'react';
import { apiClient } from './apiClient';

function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        apiClient.get('/posts').then(res => setPosts(res.data));
    }, []);
    return (
        <div>
            {posts.map(p => <h2 key={p.title}>{p.title}</h2>)}
        </div>
    );
}

export default Home;