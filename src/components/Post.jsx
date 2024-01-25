import React, { useState, useEffect } from 'react';
import { Container, PostDescription } from '../styles/Styles';




const PostList = () => {

    const [posts, setPosts] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
        userName: '',
        imageUrl: '',
    });

    useEffect(() => {
        // Fazendo uma solicitação para o servidor JSON
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Erro ao buscar dados do servidor:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCreatePost = () => {
        // Envie o novo post para o servidor (adapte conforme necessário)
        // Aqui estou usando um método POST para o endpoint 'http://localhost:3000/posts'
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        })
            .then(response => response.json())
            .then(data => {
                // Atualize o estado para incluir o novo post
                setPosts(prevPosts => [...prevPosts, data]);
                // Limpe o formulário de criação de post
                setNewPost({
                    title: '',
                    description: '',
                    userName: '',
                    imageUrl: '',
                });
                // Oculte o formulário de criação de post
                setShowCreateForm(false);
            })
            .catch(error => console.error('Erro ao criar post:', error));
    };

    return (
        <Container>
            <div className='header'>
                <h2>Lista de Posts</h2>
                <button onClick={() => setShowCreateForm(!showCreateForm)}>
                    {showCreateForm ? 'Cancelar Criação' : 'Novo Post'}
                </button>
            </div>
            <div className='create-post-form'>
                {showCreateForm && (
                    <div className='form' >
                        <input
                            type='text'
                            name='title'
                            placeholder='Título'
                            value={newPost.title}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name='description'
                            placeholder='Descrição'
                            value={newPost.description}
                            onChange={handleInputChange}
                        />
                        <input
                            type='text'
                            name='userName'
                            placeholder='Nome do Usuário'
                            value={newPost.userName}
                            onChange={handleInputChange}
                        />
                        <input
                            type='text'
                            name='imageUrl'
                            placeholder='URL da Imagem'
                            value={newPost.imageUrl}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleCreatePost}>Criar Post</button>
                    </div>

                )
                }
            </div >


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

        </ Container >
    )
}

export default PostList