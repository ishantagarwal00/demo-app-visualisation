import React,{useState,useEffect} from 'react';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Canvas from '../../components/Canvas/Canvas';
import './signup.css';

const Signup = () => {
    return(
        <>
        <div className='signup-page-conatiner'>
        <Header />
        <Navbar />
        <Canvas />
        </div>
        </>
    );
}

export default Signup;