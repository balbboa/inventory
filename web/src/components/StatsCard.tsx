import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import Router from "next/router";
import { ReactNode } from "react";
import { colors } from "../utils/colors";

interface StatsCardProps {
  title: string;
  icon: ReactNode;
  path: string;
}

const StatsCard = (props: StatsCardProps) => {
  const { title, icon, path } = props;
  return (
    <Box
      m={[1, 3]}
      width={"19rem"}
      cursor={"pointer"}
      px={{ base: 1, md: 5 }}
      py={"4"}
      shadow={"2xl"}
      bg={useColorModeValue("white", colors.grayWolf)}
      rounded={"lg"}
      onClick={() => Router.push(path)}
    >
      <Flex justifyContent={"start"} alignItems={"center"}>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
        <Box pl={{ base: 2, md: 4 }}>
          <Heading fontSize={"md"} fontWeight={"medium"}>
            {title}
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default StatsCard;
