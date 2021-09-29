import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url(https://www.wallpapertip.com/wmimgs/250-2508431_github-wallpaper.jpg);
    background-size: cover;
    background-position: center;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackgroundForm = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 50vh;
    background-color: #fe016e;
    opacity: 0.90;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 2rem 0;
    border-radius: .5rem;
`;

export const Logo = styled.img`
    width: 4.5rem;
    margin-bottom: -1rem;
`;

export const Title = styled.h2`
    color: #fff;
    margin-bottom: .25rem;
`;

export const Subtitle = styled.p`
    color: #fff;
    margin-bottom: .75rem;
    font-weight: 500;
    width: 84%;
    text-align: center;
`;

export const DivInputs = styled.div`
    display: flex;
    margin-top: .5rem;
    justify-content: center;
`;

export const Input = styled.input`
    border: 2px solid #ddd;
    border-right: none;
    border-radius: .5rem 0 0 .5rem;
    height: 2.5rem;
    width: 55%;
    padding: 0 .5rem;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
        border-right: none;
    }
`;

export const Button = styled.button`
    height: 2.75rem;;
    width: 35%;
    border: 2px solid #ddd;
    border-left: none;
    background: #1f3d89;
    color: #fff;
    font-weight: bold;
    border-radius: 0 .5rem .5rem 0;
    cursor: pointer;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
    &:hover{
        background-color: #fff;
        color: #1f3d89;
        border: 2px solid #1f3d89;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: .75rem;
    color: white;
    font-weight: 700;
    margin-top: .5rem;
   
`;