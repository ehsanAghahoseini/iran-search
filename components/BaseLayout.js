import React, { useState , useEffect} from "react";
import Header from './Header';
import Footer from './Footer';
import Head from "next/head";


function BaseLayout({children}) {



    
    return (
        <>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' />

            <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="icon" type="image/png" sizes="150x150" href="/favicon/mstile-150x150.png"/>
            <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png"/>
            <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png"/>
            <link rel="manifest" href="/manifest.webmanifest"/>
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/> 


            
        </Head>
        <Header/>  
            {children}
        <Footer/>
        </>
    )
}

export default BaseLayout;