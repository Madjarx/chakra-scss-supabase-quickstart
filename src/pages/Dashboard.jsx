import { Outlet } from "react-router-dom";

// Components imports
import { Sidebar } from "../components";
import { Flex, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Flex direction={"row"} width={"100vw"} height={"100vh"}>
      <Flex width={"10%"}>
        <Sidebar />
      </Flex>
      <Flex width={"90%"} style={{ backgroundColor: "#d9d9d9" }} direction={'column'}>
        {/* <Flex height={"20%"}>
          <Text>Something Something</Text>
        </Flex> */}
        {/* <Flex height={"80%"}>
          <Outlet />
        </Flex> */}
        <Outlet />
      </Flex>
    </Flex>
  );
}
