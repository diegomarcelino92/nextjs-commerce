import Head from 'next/head';

import Home from '../src/views/Home';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
