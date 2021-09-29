import styled from 'styled-components';
import {  Link  } from 'react-router-dom';


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:100%;
    background-image: url(https://pbs.twimg.com/media/DwfHdv4WoAIeq1Z.jpg);
    background-size: contain;
    background-position: center;
    padding: 4rem 0;    
`;

export const Divider = styled.div`
    padding: 11rem 0;
`;

export const Content = styled.div`
    width: 90vw;
    max-width: 40rem;
    margin: auto;
    background-color: #f4db67;
    opacity: .9;
    display: grid;
    justify-items: center;
    border-radius: .5rem;
`;

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    width: 75%;
`;

export const ListItem = styled.li`
    padding: .5ren;
    margin: .5rem 0;
    background: #1f3d89;
    color: #fff;
    padding: .25rem .25rem .25rem .5rem;
    border-radius: .5rem;
`;

export const LinkRepository = styled.a`
    text-decoration: none;
    color: #fff;

    &:hover{
        color: #f4db67;
    }
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 20%;
    text-decoration: none;
    text-align: center;
    margin: 2rem auto;
    background-color: #1f3d89;
    padding: .5rem 0;
    color: #fff;
    font-weight: bold;
    border-radius: .5rem;

    &:hover{
        color: #1f3d89;
        background-color: #fff;
        border: 2px solid #1f3d89;
    }
`;