import React, { useState, useEffect } from 'react';
import { Container, PostDescription } from '../styles/Styles';




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
        <Container>
            <h2>Lista de Posts</h2>
            <PostDescription>
                {posts.map(post => (
                    <div className='post' key={post.id}>
                        <img src={post.imageUrl} alt={post.alt} />
                        <div className='contentpost'>
                            <h3 className='title'>{post.title}</h3>
                            <p className='description'>{post.description}</p>
                            <p className='username'>{post.userName}</p>
                        </div>

                    </div>
                ))}
            </PostDescription>

        </ Container>
    )
}

export default PostList