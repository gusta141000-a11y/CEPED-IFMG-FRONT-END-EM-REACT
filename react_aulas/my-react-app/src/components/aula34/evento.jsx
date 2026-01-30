import {useState} from 'react';

function Evento() {
    const[nome,setNome]=useState("")
    const[email,setEmail]=useState("")
    const[senha,setSenha]=useState("")

    function funcaoEvento(e){
        e.preventDefault();
        console.log(`O usuario ${nome} logou no email ${email} com a senha ${senha}`)
    }
    return (
        <form onSubmit={funcaoEvento}>
            <input
                type="text"
                value={nome}
                onChange = {(e) => setNome(e.target.value)}
            />
             <input
                type="text"
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
            />
             <input
                type="text"
                value={senha}
                onChange = {(e) => setSenha(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
            
    )

}
export default Evento;