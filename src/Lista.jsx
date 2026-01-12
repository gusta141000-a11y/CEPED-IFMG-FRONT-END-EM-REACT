function Lista(){
    let a;
    let lista = []; // ["melao","maca","manga"];
    let i = true;


    while(i === true){
        console.log("1 - adicionar item");
        console.log("2 - encerrar");
        //a = Number(prompt("Informe sua escolha:"));
        //if(a === 1){
        //     lista.push(prompt("Informe o item:"));
        // }
        a = prompt("informe item ou digite saur para cancelar")
        if(a === "sair"){
            break;
        }
        lista.push(a)
    }
    return(
        <div className="Descrição">
                
            <ul>
                {lista.map((list) => (
                    <li> {list} </li>
                ))
                }
               
            </ul>
        </div>
    );
}
export default Lista;