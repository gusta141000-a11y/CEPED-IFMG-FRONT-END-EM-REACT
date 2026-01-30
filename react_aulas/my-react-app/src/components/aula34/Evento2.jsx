import {useForm} from 'react-hook-form';

function SimpleForm() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(`O usuario ${data.firstName} entrou no email ${data.useEmail} com a senha ${data.useEmail}`);
    
    return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="Nome" />
        <input {...register("useEmail")} placeholder="E-mail" />
        <input {...register("userSenha")} placeholder="Senha" />
        <button type="submit">Enviar</button>
    </form>
    );
}
export default SimpleForm;