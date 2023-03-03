// Chakra UI
import { ToastId, UseToastOptions } from "@chakra-ui/react";
// React
import { Dispatch, SetStateAction } from "react";
// Dado estático
import { SUPPLIER_INITIAL_DATA } from "../../../pages/cadastrar-fornecedores";
// Interfaces
import { IUserRegister, IUserRequest } from "./usersInterfaces";
import apiLaravel from "../../../services/apiLaravel";
import { getAPIClientLaravel } from "../../../services/axiosLaravel";

export const getUsers = async () => {
  let user: IUserRequest = {
    lenght: 0,
    users: [],
  } as IUserRequest;

  await apiLaravel.get("users").then((request) => {
    user = request.data.users;
  });
  return user;
};

// Salva o fornecedor
export const handleSaveUser = async (
  registerUser: IUserRegister,
  setUserRequest: Dispatch<SetStateAction<IUserRequest>>,
  setRegisterUser: Dispatch<SetStateAction<IUserRegister>>,
  toast: (options?: UseToastOptions | undefined) => ToastId,
  setFormError: Dispatch<SetStateAction<string>>
) => {
  const apiLaravel = getAPIClientLaravel();
  if (registerUser.name !== "") {
    await apiLaravel
      .post("users", registerUser)
      .then(async () => {
        // Reinicia o formulário
        setRegisterUser(SUPPLIER_INITIAL_DATA);
        // Atualiza a listagem de organizações
        setUserRequest(await getUsers());
        // Mensagem de sucesso
        toast({
          title: "Sucesso!",
          description: "Fornecedor cadastrado.",
          status: "success",
          position: "top",
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Erro ao cadastrar o fornecedor",
          description: error.status,
          status: "error",
          position: "top",
          isClosable: true,
        });
      });
  } else {
    // Informa o erro do formulário
    setFormError("registerUser");
    toast({
      title: "Erro ao cadastrar o fornecedor",
      description: "Campo NOME inválido",
      status: "error",
      position: "top",
      isClosable: true,
    });
  }
};

// Edita o fornecedor
const handleEditUser = async (
  registerUser: IUserRegister,
  setUserRequest: Dispatch<SetStateAction<IUserRequest>>,
  setRegisterUser: Dispatch<SetStateAction<IUserRegister>>,
  setIsEdit: Dispatch<SetStateAction<boolean>>,
  toast: (options?: UseToastOptions | undefined) => ToastId,
  setFormError: Dispatch<SetStateAction<string>>
) => {
  const apiLaravel = getAPIClientLaravel();
  if (registerUser.name !== "") {
    await apiLaravel
      .patch("users/" + registerUser.id, registerUser)
      .then(async () => {
        // Reinicia o formulário
        setRegisterUser(SUPPLIER_INITIAL_DATA);
        // Atualiza a listagem de organizações
        setUserRequest(await getUsers());
        // Mensagem de sucesso
        toast({
          title: "Sucesso!",
          description: "Fornecedor editado.",
          status: "success",
          position: "top",
          isClosable: true,
        });
        setIsEdit(false);
      })
      .catch(() => {
        // Informa o erro vindo da API
        toast({
          title: "Ocorreu um erro na API",
          status: "error",
          position: "top",
          isClosable: true,
        });
      });
  } else {
    // Informa o erro do formulário
    setFormError("registerUser");
    toast({
      title: "Erro ao cadastrar o fornecedor",
      description: "Campo NOME inválido",
      status: "error",
      position: "top",
      isClosable: true,
    });
  }
};

// Deleta o fornecedor
export const handleDeleteUser = async (
  registerUser: IUserRegister,
  setUserRequest: Dispatch<SetStateAction<IUserRequest>>,
  setRegisterUser: Dispatch<SetStateAction<IUserRegister>>,
  setIsEdit: Dispatch<SetStateAction<boolean>>,
  toast: (options?: UseToastOptions | undefined) => ToastId
) => {
  const apiLaravel = getAPIClientLaravel();

  await apiLaravel
    .delete("users/" + registerUser.id)
    .then(async () => {
      // Reinicia o formulário
      setRegisterUser(SUPPLIER_INITIAL_DATA);
      // Atualiza a listagem de organizações
      setUserRequest(await getUsers());
      // Mensagem de sucesso
      toast({
        title: "Sucesso!",
        description: "Fornecedor deletado.",
        status: "success",
        position: "top",
        isClosable: true,
      });
      setIsEdit(false);
    })
    .catch(() => {
      // Informa o erro vindo da API
      toast({
        title: "Ocorreu um erro na API",
        status: "error",
        position: "top",
        isClosable: true,
      });
    });
};

export default handleEditUser;
