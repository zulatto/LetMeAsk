import {useHistory} from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button'

import '../styles/auth.scss';
import { useContext } from 'react';
import { AuthContext } from '../App';

export function Home() {
        const history = useHistory();
        const{user, signWithGoogle} = useContext(AuthContext)
        async function handleCreateRoom(){
            if(!user){
                await signWithGoogle()
            }
            history.push('/rooms/new');
        }
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>
                    tire as duvidas de sua audiencia em tempo real
                </p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        ou entre em nossa sala
                    </div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o codigo da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}