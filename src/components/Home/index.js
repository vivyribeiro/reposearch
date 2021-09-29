import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import Logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom';
import Repositories from '../Repositories';

export default function App() {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [error,setError] = useState(false);

  function handleSeacrh(){
    axios.get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesData = [];
      repositories.map((repository) =>{
        repositoriesData.push(repository)
        console.log(repository)

      });
      localStorage.setItem('repositoriesData', JSON.stringify(repositoriesData));
      setError(false);
      history.push('/repositories');
    })
    .catch(err =>{
      setError(true);
    })
  }

  return (
    <S.Container>
      <S.Content> 
        <S.BackgroundForm> 
          <S.Logo src={Logo} alt="Logo" title="RepoSearch" />
          <S.Title>RepoSearch</ S.Title>
          < S.Subtitle>Informe o usuário para saber de todos seus repositórios no GitHub</ S.Subtitle>
          <S.DivInputs>
          <S.Input className="userInput" placeholder="Usúario" valeu={ user }  onChange={e => setUser(e.target.value)}/>
          <S.Button type="button" onClick={handleSeacrh} >Pesquisar</S.Button>
          </S.DivInputs>
          {error ? <S.ErrorMsg>Usúario não encontrado. Tente novamente!</S.ErrorMsg> : ''}
        </S.BackgroundForm>
      </S.Content>
      
    </S.Container>
  );
}
