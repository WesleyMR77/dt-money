import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionsModal } from './components/NewTransactionModal';

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');


export function App() {
  const [isNewTransactionModelOpen, setIsNewTransactionModelOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModelOpen(true);
      
  }
  function handleCloseNewTransactionModal(){
      setIsNewTransactionModelOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>

      <NewTransactionsModal
      isOpen={isNewTransactionModelOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
 
      <GlobalStyle/>
    </>
  );
}

