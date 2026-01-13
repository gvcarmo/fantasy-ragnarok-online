import './Register.css'

export const Cadastrar = () => {
    return (
        <div className="cadastro" id="register">
            <div className="cadastro-rules">
                <img className="cadastro-title" src="./titles/register.png" alt="Cadastre-se" />
                <p>Ao se cadastrar você está concordando com nossos termos:</p>
                <textarea readOnly className="rules" name="rules" id="rules" cols="50" rows="16" value="1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt ipsum aut asperiores? Assumenda inventore dolorum at ad. Cupiditate.
        2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit.
        3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde
        5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt ipsum aut asperiores? Assumenda inventore dolorum.
        6. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt ipsum aut asperiores? Assumenda inventore dolorum at ad. Cupiditate.
        7. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta.
        8. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt.
        9. Lorem ipsum dolor sit amet.
        10. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, unde ut, nulla expedita soluta, illum velit omnis nesciunt ipsum aut asperiores? Assumenda inventore dolorum at ad. Cupiditate." ></textarea>

            </div>
            <div className="cadastro-forms">
                <form action="POST">
                    <input className="input name" id="name" name="name" type="text" placeholder="Nome completo" />

                    <div className="birthday-form">
                        <label htmlFor="birthday">Data de nascimento</label>
                        <div>
                            <input className="input day" id="day" name="day" type="text" placeholder="DD" />
                            <input className="input month" id="month" name="month" type="text" placeholder="MM" />
                            <input className="input year" id="year" name="year" type="text" placeholder="YYYY" />
                        </div>
                    </div>

                    <div className="genero-form">
                        <label htmlFor="genero">Gênero</label>
                        <div className="genero-for">
                            <div className="input-radio">
                                <input id="feminino" name="genero" type="radio" />
                                <label htmlFor="feminino">Feminino</label>
                            </div>
                            <div className="input-radio">
                                <input id="masculino" name="genero" type="radio" />
                                <label htmlFor="feminino">Masculino</label>
                            </div>
                            <div className="input-radio-last">
                                <input id="personalizado" name="genero" type="radio" />
                                <label htmlFor="feminino">Personalizado</label>
                            </div>
                        </div>
                    </div>

                    <input className="input email" id="email" name="email" type="text" placeholder="* E-mail ou telefone" />

                    <p>Insira uma combinação com:<br />
                        * de 8 à 18 caracteres<br />
                        * pelo menos 4 números<br />
                        * letras<br />
                        * sinais de pontuação e símbolos (como ! e &).</p>

                    <input className="input senha" id="senha" name="senha" type="text" placeholder="* Senha" />

                </form>
                <button className="submit" type="submit">CADASTRAR</button>
            </div>
        </div>
    )
}