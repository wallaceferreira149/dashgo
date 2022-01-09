/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  Divider,
  Flex,
  FormErrorMessage,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { useMutation } from 'react-query';
import { api } from '../../services/api';
import { queryClient } from '../../services/queryClient';
import { useRouter } from 'next/router';

interface CreateUserFormData {
  name: string;
  email: string;
  password: string;
  password_cofirmation: string;
}

const createUserFormSchemma = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup
    .string()
    .required('O e-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: yup
    .string()
    .required('A senha é obrigatória')
    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
  password_cofirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

export default function CreateUser() {
  //O useQuery é utilizado para realizar pesquisas ao DB. Já o useMutation é utilizado para realizar outras transações. Como o useMutation não irá guardar nada em cache o primeiro parâmetro já é a função a ser executada, nesse caso para criar um novo usuário. A diferença em utilizar a Mutation é que teremos acesso aos dados como isLoadin, error, status, etc.

  const router = useRouter();

  const createUser = useMutation(
    async (user: CreateUserFormData) => {
      const response = await api.post('users', {
        user: {
          ...user,
          created_at: new Date(),
        },
      });
      return response.data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
        // Como segundo parâmetro dizemos que se tiver sucesso na criação do usuários limpamos o cache, caso contrário o novo usuário não irá aparecer. O cache pode ser limpo por página.
      },
    },
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(createUserFormSchemma),
  });

  const handleCrateUser: SubmitHandler<CreateUserFormData> = async (
    values,
    event,
  ) => {
    // O método mutateAsync faz uma chamada a mutation assíncrona. Passamos os values que são os dados que necessitam para criação de um usuário.
    await createUser.mutateAsync(values);
    router.push('/users');
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={['6', '8']}
          onSubmit={handleSubmit(handleCrateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="name"
                label="Nome Completo"
                errors={errors.name}
                {...register('name')}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                errors={errors.email}
                {...register('email')}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                errors={errors.password}
                {...register('password')}
              />

              <Input
                name="password_cofirmation"
                type="password"
                label="Confirmação de senha"
                errors={errors.password_cofirmation}
                {...register('password_cofirmation')}
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button type="submit" colorScheme="pink" isLoading={isSubmitting}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
