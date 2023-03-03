// Next
import { Flex } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
// Cookies
import { parseCookies } from "nookies";
// Layout
import { FaCartPlus } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import Layout from "../../components/Layout";
import StatsCard from "../../components/StatsCard";

const Home = () => {
  return (
    <Layout props={{ title: "Início" }}>
      Bem-vindo ao sistema,
      <Flex width={"100hw"} flexDirection={"row"} flexWrap={"wrap"}>
        <StatsCard
          icon={<FaBuilding size={"2rem"} />}
          title={"Cadastro de unidades"}
          path={"/cadastrar-unidades"}
        />
        <StatsCard
          icon={<FaCartPlus size={"2rem"} />}
          title={"Cadastro de items"}
          path={"/cadastrar-items"}
        />
        <StatsCard
          icon={<FaHouseUser size={"2rem"} />}
          title={"Cadastro de imóvel"}
          path={"/cadastrar-imoveis"}
        />
        <StatsCard
          icon={<FaHeadset size={"2rem"} />}
          title={"Cadastro de serviços"}
          path={"/cadastrar-servicos"}
        />
        <StatsCard
          icon={<FaHeadset size={"2rem"} />}
          title={"Demanda de serviços"}
          path={"/cadastrar-demanda-servicos"}
        />
        <StatsCard
          icon={<FaCartPlus size={"2rem"} />}
          title={"Demanda de itens"}
          path={"/cadastrar-demanda-itens"}
        />
        <StatsCard
          icon={<FaHammer size={"2rem"} />}
          title={"Cadastro de fabricantes"}
          path={"/cadastrar-fabricantes"}
        />
        <StatsCard
          icon={<FaLaptop size={"2rem"} />}
          title={"Cadastro de modelos"}
          path={"/cadastrar-modelos"}
        />
        <StatsCard
          icon={<FaLayerGroup size={"2rem"} />}
          title={"Cadastro de grupos"}
          path={"/cadastrar-grupos"}
        />
        <StatsCard
          icon={<FaIndustry size={"2rem"} />}
          title={"Cadastro de fornecedores"}
          path={"/cadastrar-fornecedores"}
        />
        <StatsCard
          icon={<FaGlobe size={"2rem"} />}
          title={"Cadastro de tipos de serviço"}
          path={"/cadastrar-tipos-servico"}
        />
        <StatsCard
          icon={<FaInfoCircle size={"2rem"} />}
          title={"Cadastro de usuários"}
          path={"/cadastrar-usuarios"}
        />
      </Flex>
    </Layout>
  );
};

export default Home;

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
