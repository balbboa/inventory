// Chakra UI
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Td,
  Tr,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
//NextJS
import { GetServerSideProps } from "next";
// Cookies
import { parseCookies } from "nookies";
// React
import { Fragment, useEffect, useState } from "react";
// Icones
import { BsPlusSquare } from "react-icons/bs";
import { FiEdit, FiTrash } from "react-icons/fi";
// Layout
import Layout from "../../components/Layout";
// Componentes
import Card from "../../components/Card";
import DefaultTable from "../../components/Table";
// Cores
import { colors } from "../../utils/colors";
// Interfaces
import { IOpmRegister } from "../../functions/opms/data/opmsInterfaces";
// Funções
import handleEditOpm, {
  getOpms,
  handleSaveOpm,
  handleDeleteOpm,
} from "../../functions/opms/data/opmsFunctions";
import { getImmobiles } from "../../functions/immobiles/data/immobilesFunctions";
import { IImmobileRegister } from "../../functions/immobiles/data/immobilesInterfaces";

export const OPM_INITIAL_DATA: any = {
  name: "",
  acronym: "",
};

// Componente principal
const CadastrarOpms = () => {
  // hooks

  // Organização
  const [registerOpm, setRegisterOpm] = useState(OPM_INITIAL_DATA);
  // Requisisões das organizações
  const [opmRequest, setOpmRequest] = useState<any>();
  const [optionsOpms, setOptionsOpms] = useState<any>();
  const [optionsImmobiles, setOptionsImmobiles] = useState<any>();
  // Erros do formulário
  const [formError, setFormError] = useState("");
  // Avisos
  const toast = useToast();
  // Verifica se é para editar
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleGetData = async () => {
    // Obtem as organizações
    const opm = await getOpms();
    setOpmRequest(opm);
  };

  const handleSelectOpms = async () => {
    // Obtem os fabricantes para o select
    const opms = await getOpms();
    setOptionsOpms(opms);
  };

  const handleSelectImmobiles = async () => {
    // Obtem os fabricantes para o select
    const immobiles = await getImmobiles();
    setOptionsImmobiles(immobiles);
  };

  useEffect(() => {
    handleGetData();
    handleSelectOpms();
    handleSelectImmobiles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const colorButtonEdit = useColorModeValue("gray.300", colors.graySky);

  return (
    <Layout props={{ title: "Cadastrar usuário" }}>
      <Card
        props={{
          title: isEdit ? "Editar usuário" : "Cadastrar usuário",
          maxW: 700,
        }}
      >
        <FormControl padding={5}>
          <FormLabel>Usuário</FormLabel>
          <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
            <Input
              type="text"
              value={registerOpm.name}
              isInvalid={formError === "registerOpm"}
              onChange={(event) => {
                setRegisterOpm({
                  ...registerOpm,
                  name: event.currentTarget.value.toUpperCase(),
                });
                setFormError("");
              }}
            />
            <Select
              ml={5}
              placeholder="OPM"
              value={registerOpm.opmsId}
              isInvalid={formError === "registerImmobile"}
              onChange={(event) => {
                setRegisterOpm({
                  ...registerOpm,
                  opmsId: event.currentTarget.value,
                });
                setFormError("");
              }}
            >
              {optionsOpms?.map((option: IOpmRegister) => (
                <option key={option.id} value={option.id}>
                  {option.name} - {option.acronym}
                </option>
              ))}
            </Select>
            <Select
              ml={5}
              placeholder="IMÓVEL"
              value={registerOpm.opmsId}
              isInvalid={formError === "registerImmobile"}
              onChange={(event) => {
                setRegisterOpm({
                  ...registerOpm,
                  opmsId: event.currentTarget.value,
                });
                setFormError("");
              }}
            >
              {optionsImmobiles?.map((option: IImmobileRegister) => (
                <option key={option.id} value={option.id}>
                  {option.name} - {option.place}
                </option>
              ))}
            </Select>
            <Button
              minW={100}
              leftIcon={isEdit ? <FiEdit /> : <BsPlusSquare />}
              colorScheme="green"
              variant="solid"
              onClick={() => {
                isEdit
                  ? handleEditOpm(
                      registerOpm,
                      setOpmRequest,
                      setRegisterOpm,
                      setIsEdit,
                      toast,
                      setFormError
                    )
                  : handleSaveOpm(
                      registerOpm,
                      setOpmRequest,
                      setRegisterOpm,
                      toast,
                      setFormError
                    );
              }}
              ml={5}
            >
              Salvar
            </Button>
            {isEdit ? (
              <Button
                minW={100}
                leftIcon={<FiTrash />}
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  handleDeleteOpm(
                    registerOpm,
                    setOpmRequest,
                    setRegisterOpm,
                    setIsEdit,
                    toast
                  );
                }}
                ml={5}
                p={2}
              >
                Deletar
              </Button>
            ) : null}
          </Box>
        </FormControl>
      </Card>
      <DefaultTable
        props={{
          tableName: "Usuários",
          header: ["Usuário", "OPM", "IMÓVEL"],
        }}
      >
        {opmRequest?.length > 0 ? (
          opmRequest.map((opm: IOpmRegister, index: number) => {
            return (
              <Fragment key={index}>
                <Tr>
                  <Td>{opm.name}</Td>
                  <Td>{opm.name}</Td>
                  <Td>{opm.acronym}</Td>
                  <Td>
                    <Button
                      leftIcon={<FiEdit />}
                      colorScheme={"gray"}
                      variant="solid"
                      bg={colorButtonEdit}
                      onClick={() => {
                        toast({
                          title: "Opm " + opm.name + " selecionada",
                          status: "info",
                          position: "top",
                          isClosable: true,
                        });
                        setRegisterOpm(opm), setIsEdit(true);
                      }}
                    >
                      Editar
                    </Button>
                  </Td>
                </Tr>
              </Fragment>
            );
          })
        ) : (
          <Tr>
            <Td>Nenhum usuário</Td>
          </Tr>
        )}
      </DefaultTable>
    </Layout>
  );
};

export default CadastrarOpms;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { ["nextauth.token"]: token } = parseCookies(context);

  // Verifica se o usuário está logado
  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
