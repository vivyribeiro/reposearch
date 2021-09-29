import React, { useEffect, useState }from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


export default function Repositories(){
    const history = useHistory();
    const [repositories, setRepositories] = useState([]); 

    useEffect(() => {
        let repositoriesData = localStorage.getItem('repositoriesData');
        if(repositoriesData !== null){
            repositoriesData = JSON.parse(repositoriesData);
            setRepositories(repositoriesData);
            
            localStorage.clear();
        }else{
            history.push('/');
        }
    }, []);
    

    return (
        <S.Container>
            <S.Divider>
                <S.Content>
                <S.Title>{repositories.length} Repositórios</S.Title>
                <S.List>
                    {repositories.map(repository => {
                        return(
                        <S.ListItem>Repositório: <S.LinkRepository  href={repository.html_url}  target="_blank" rel="external"> 
                        {repository.name}</ S.LinkRepository></S.ListItem>
                        )
                    }) }              
                </S.List>
                <S.LinkHome to="/">Voltar</S.LinkHome>
                </ S.Content> 
            </S.Divider>
        </S.Container>
    )
}