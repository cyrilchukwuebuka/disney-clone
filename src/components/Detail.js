import React from 'react'
import styled from 'styled-components'

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="https://lumiere-a.akamaihd.net/v1/images/eu_dlp-reopening-2021_c169_r_c8457f27.jpeg" alt="" />
            </Background>
            <ImageTitle>
                <img src="/images/viewers-national.png" alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>WHITE</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 . 7m . Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, blanditiis.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, blanditiis.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, blanditiis.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, blanditiis.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, blanditiis.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, blanditiis.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.6;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin-top: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    cursor: pointer;
    height: 56px;
    background: rgb(249, 249, 249);
    padding: 0 24px;
    margin-right: 22px;
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    border: none;
    letter-spacing: 1.8px;

    &:hover {
        background: rgb(198, 198, 198)
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`
const AddButton = styled.button`
    width: 44px;
    height: 44px;
    cursor: pointer;
    margin-right: 16px;
    display: flex;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);

    span {
        font-size: 30px;
        color: white
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color: rgba(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    margin-top:26px;
    min-height: 20px;
`

const Description = styled.div`
    max-width: 700px;
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`