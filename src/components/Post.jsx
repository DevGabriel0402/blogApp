import React, { useState, useEffect } from 'react';



const PostList = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fazendo uma solicitação para o servidor JSON
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Erro ao buscar dados do servidor:', error));
    }, []);
    return (
        <>
            <h2>Lista de Posts</h2>
            {posts.map(post => (
                <div key={post.id}>
                    <img src={post.imageUrl} alt={post.alt} />
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <p>Por: {post.userName}</p>
                </div>
            ))}
        </ >
    )
}

export default PostList