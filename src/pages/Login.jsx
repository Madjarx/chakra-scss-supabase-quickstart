// Chakra UI imports
import {
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Flex,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";

// Assets imports
import logo from "../assets/img/kendamanomics.jpg";

// Utilities imports
import { AdminContext } from '../context/adminContext';

export default function Login() {
const {isAuthenticated, toggleAuthenticated} = useContext(AdminContext);
  const toast = useToast();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);


  // #region Handlers
  /**
   * @desc - Displays a Feedback Toast
   * @param {String} toastStatus - success | error
   * @param {String} toastTitle - Content of the toast 
   */
  const handleShowToast = (toastStatus, toastTitle) => {
    toast({
        title: toastTitle,
        status: toastStatus,
        isClosable: true,
    });
  };

  const handleLogin = async () => {
    let adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
    let adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (adminUsername === username && adminPassword === password) {
        localStorage.setItem('admin', 'exists');
        handleShowToast('success', 'Welcome Back');
    } else {
        handleShowToast('error', `Woops, sorry, can't let you in`)
    }
  };

  const handleShowPassowrd = () => {
    setShowPassword(!showPassword);
  };
  // #endregion

  

  return (
    <>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"space-around"}
        gap={3}
      >
        <Image src={logo} boxSize="100px" />
        <Text>Kendamanomics Admin Dashboard</Text>
        <Input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <InputGroup>
          <Input
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleShowPassowrd}>
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Button onClick={handleLogin}>Login</Button>
      </Flex>
    </>
  );
}
