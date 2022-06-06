import Primary from "../../components/PrimaryButton";
import Secundary from "../../components/SecundaryButton";
import Input from "../../components/Input";
import Header from "../../components/Header";
import FloatButton from "../../components/FloatButton";
import Google from "../../assets/images/google-icon.png"
import { Container, Contents, Buttons } from "./style";

import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

function Register() {

  const schema = yup.object().shape({
    user: yup.string().max(40, "Seu nome não pode ser tão grande!").required('Campo obrigatório'),
    email: yup.string().email('Insira um e-mail valido!').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório.'),
    passwordConfirmation: yup.string().required('Campo obrigatório')
    .oneOf([yup.ref('password')], 'Senhas não correspondentes!'),
  })

  const { register, handleSubmit, formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });

  const validation = (dados) => {
    dados !== undefined && onSubmit("login", dados)
  }
  
  return (
    <Container>
      <Header />
      <Contents>
      <Primary type="google">
          <span>
            <img src={Google} alt="icone-google"/>
          </span>
          Entrar com Google
        </Primary>
        <p>ou</p>

        <div onSubmit={handleSubmit(validation)}>
          <Input placeholder="Usuário" />
          <span>{errors.user?.message}</span>
          <Input placeholder="E-mail" />
          <span>{errors.email?.message}</span>
          <Input placeholder="Senha" />
          <span>{errors.password?.message}</span>
          <Input placeholder="Confirmação de senha" />
          <span>{errors.passwordConfirmation?.message}</span>
        </div>

        <Buttons>
          <Primary type="submit">Cadastrar</Primary>
          <Secundary>Já tenho conta</Secundary>
        </Buttons>

        <FloatButton />
      </Contents>
    </Container>
  );
}

export default Register;
