// Components imports
import { Image, Flex, Text, Button, Box } from "@chakra-ui/react";
import { MenuItem } from "./MenuItem";

// Utilities imports
import { useNavigate, Link } from "react-router-dom";

// Assets imports
import logo from "../../assets/img/kendamanomics.jpg";



export default function Sidebar() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const menuItems = [
    {
      linkTo: "users",
      text: "users",
    },
    {
      linkTo: "pins",
      text: "Pins",
    },
    {
      linkTo: "leaderboard",
      text: "Leaderboard",
    },
  ];

  return (
    <>
      <Flex
        width={"100%"}
        height={"100%"}
        direction={"column"}
        justify={"space-between"}
      >
        <Flex
          width={"100%"}
          height={"20%"}
          direction={"column"}
          align={"center"}
          justify={"center"}
          gap={3}
        >
          <Image
            src={logo}
            boxSize={"70px"}
            onClick={handleHomeClick}
            style={{ cursor: "pointer" }}
          />
          <Text fontSize={20}>Kendamanomics</Text>
        </Flex>

        <Flex direction={"column"} align={"center"} justify={"flex-start"}>
          <MenuItem linkTo={'users'} text={'Users'}/>
          <MenuItem linkTo={'pins'} text={'Pins'}/>
          <MenuItem linkTo={'leaderboard'} text={'Leaderboard'}/>
          {/* {menuItems.map((element, i) => {
            <MenuItem
              key={element.text}
              linkTo={element.linkTo}
              text={element.text}
            />;
          })} */}
        </Flex>

        <Button style={{ marginBottom: 50 }}>Logout</Button>
      </Flex>
    </>
  );
}
