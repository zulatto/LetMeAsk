import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas"></img>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>
                    tire as duvidas de sua audiencia em tempo real
                </p>
                <main>
                    <div>
                        <img src={logoImg} alt="letmeask"></img>
                        <button>
                            <img src={googleIconImg} alt="Logo google"></img>
                            Crie sua sala com o Google
                        </button>
                        <div>
                            ou entre em nossa sala
                        </div>
                        <form>
                            <input
                                type="text"
                                placeholder="Digite o codigo da sala"
                            />
                            <button type="submit">
                                Entrar na sala
                            </button>
                        </form>
                    </div>
                </main>
            </aside>
        </div>
    )
}