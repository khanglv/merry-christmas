import React, { useEffect, useState } from 'react';
import {Progress } from 'antd';
import {css} from 'emotion';
import "./styles.css";

const rootMain = css`
    .rootBody{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        .title{
            display: flex;
            justify-content: center;
            height: 100px;
            @media only screen and (max-width: 768px) {
                /* display: none; */
            }
        }
        .frame{
            background-color:#e7dfdc80;
            border:solid 5vmin #eee;
            border-bottom-color:#fff;
            border-left-color:#eee;
            border-radius:2px;
            border-right-color:#eee;
            border-top-color:#ddd;
            box-shadow:0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25);
            box-sizing:border-box;
            display:inline-block;
            height: calc(100vh - 150px);
            max-height: 768px;
            padding:1vmin;
            /* max-width: 500px; */
            text-align:center;
            opacity: 0.9;
            @media only screen and (max-width: 768px) {
                width: calc(100vw - 20px);
                height:80vh;
                display: none;
            }
            /* &:before {
                border-radius:2px;
                bottom:-2vmin;
                box-shadow:0 2px 5px 0 rgba(0,0,0,.25) inset;
                content:"";
                left:-2vmin;
                position:absolute;
                right:-2vmin;
                top:-2vmin;
            }
            &:after {
                border-radius:2px;
                bottom:-2.5vmin;
                box-shadow: 0 2px 5px 0 rgba(0,0,0,.25);
                content:"";
                left:-2.5vmin;
                position:absolute;
                right:-2.5vmin;
                top:-2.5vmin;
            } */
        }
        .isMobile{
            display: none;
            @media only screen and (max-width: 768px) {
               display: block;
               width: calc(100vw - 20px);
               padding: 10px;
               border-radius: 7px;
               border: 1px solid #fff;
            }
        }
    }
`

export default function Home(){
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        try {
            function loadData(){
                if(count < 100){
                    setTimeout(()=>{
                        setCount(count + 20)
                    }, 200);
                }
            }
            loadData();
        } catch (error) {
            setCount(100)
        }
    }, [count]);
    return(
        <div className={rootMain}>
            <audio autoPlay loop>
                <source src="./music/music.mp3" type="audio/mpeg" />
            </audio>
            <section>
                <div className="snow1"></div>
                <div className="snow2"></div>
                <div className="snow3"></div>
            </section> 
            <div className="rootBody">
                <div className="title">
                    <img alt="" width="10%" src="/images/icons/ring.png"/>
                    <img alt="" width="60%" src="/images/logos/title.png"/>
                    <img alt="" width="10%" src="/images/icons/ring.png"/>
                </div>
                <div className="p-top20" style={{display: 'block'}}></div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="frame">
                        <video width="100%" height="100%" autoPlay="autoplay" loop controls muted>
                            <source src="./videos/memory.mov" type="video/mp4"/>
                        </video>
                    </div>
                    <div className="isMobile">
                        <video width="100%" height="100%" autoPlay="autoplay" loop controls muted>
                            <source src="./videos/memory.mov" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
            {count < 100 ? <div style={styles.customLoading}>
                <div>
                    <img alt="" src="./images/frames/loading.gif" />
                </div>
                <div style={{width: 200}}>
                    <Progress percent={count} showInfo={false}/>
                </div>
            </div> : null}
        </div>
    )
}

const styles = {
    root: {
        position: 'relative'
    },
    customLoading: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10000,
        top: 0, 
        left: 0,
        background: '#d5bcb5c9',
        flexFlow: 'column'
    },
    isLoading: {
        width: '3em'
    },
    children: {
        clear: 'both'
    }
}