import type { NextPage } from 'next'
import {Web3ReactProvider, useWeb3React} from '@web3-react/core';
import {Web3Provider} from '@ethersproject/providers';
import Content from '../components/Content';

const Home: NextPage = () => {
  return (
    <Web3ReactProvider getLibrary={(provider: any) => new Web3Provider(provider)}>
      <Content />
    </Web3ReactProvider>
  );
}

export default Home
