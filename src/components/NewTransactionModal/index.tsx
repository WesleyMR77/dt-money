import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TranssactionTypeContainer, RadioBox } from './styles';

interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}

export function NewTransactionsModal({ isOpen, onRequestClose }: NewTransactionsModalProps) {
    const [type, setType] = useState('deposit');
    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <RadioBox type='button'
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </RadioBox>

            <Container>
                <h2>Cadastrar transação</h2>
                <input
                    placeholder="Título"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <TranssactionTypeContainer>
                    <RadioBox
                    type="button"
                   
                    onClick={() => { setType('deposit')}}
                    >
                        <img src={ incomeImg} alt="Entrada"></img>
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                    type="button"
                        onClick={() => { setType('withdraw')}}
                        >
                        <img src={ outcomeImg} alt="Saída"></img>
                        <span>Saída</span>
                    </RadioBox>

                </TranssactionTypeContainer>


                <input
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>

    );
}