import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import Layout from '../../components/layout'
import fetch from 'isomorphic-unfetch';

const Home = props => {
    const router = useRouter();
    return (
        <Layout>
            <Head>
                <title>Current match</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="matches-title">
                {router.query.id}
            </div>

            <style jsx>{`
                .matches-title {
                  font-size: 24px;
                  font-weight: 700;
                  text-align: center;
                  padding: 24px;
                }
                .match-item {
                  font-size: 18px;
                  border: 1px solid rgba(0,0,0,.54);
                  margin: 4px 0;
                  padding: 24px;
                  text-align: center;
                  cursor: pointer;
                  border-radius: 12px;
                }
                .match-item:hover {
                  background-color: rgba(0,0,0,.12)
                }
                `}
            </style>
        </Layout>
    )
}

Home.getInitialProps = async function () {
    const res = await fetch('https://www.scorebat.com/video-api/v1/');
    const matches = await res.json();

    console.log(matches);

    return { matches };
};


export default Home
