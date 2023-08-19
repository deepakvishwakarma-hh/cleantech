import {
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { submitForm } from "services/subscription";
import { validateEmail } from "utils";

interface SubscriptionFormProps {}

const SubscriptionForm: React.FC<SubscriptionFormProps> = () => {
  const [input, setInput] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setIsValidEmail(true); // Reset email validation when input changes
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") {
      setIsValidEmail(false);
    } else {
      setIsLoading(true);
      // Simulate an async action, e.g., sending data to a server

      setIsLoading(false);
      // Add your email validation logic here
      if (validateEmail(input)) {
        // Here, you can perform any additional validation or API requests
        // to check the validity of the email address
        await submitForm({ email: input });
        console.log("Valid email:", input);
        setIsValidEmail(true);
        setInput(""); // Clear input after successful submission
      } else {
        setIsValidEmail(false);
      }
    }
  };

  return (
    <FormControl isInvalid={!isValidEmail}>
      {!isValidEmail ? (
        <FormErrorMessage>Email is not valid.</FormErrorMessage>
      ) : (
        <FormHelperText>
          Enter the email you d like to receive the newsletter on.
        </FormHelperText>
      )}
      <form onSubmit={handleSubmit}>
        <InputGroup size="md" borderBottom={"1px solid white"} py={1}>
          <Input
            border={"none"}
            p={0}
            _focus={{ outline: "none" }}
            placeholder="Email Address"
            value={input}
            onChange={handleInputChange}
          />
          <InputRightAddon p={0} bg="none" border="none">
            <IconButton
              type="submit"
              size={"md"}
              rounded={"full"}
              bg="white"
              color={"black"}
              aria-label="submit"
              icon={
                isLoading ? (
                  <Spinner size="sm" color="gray.500" />
                ) : (
                  <BsArrowRightShort size={22} />
                )
              }
              isLoading={isLoading}
            />
          </InputRightAddon>
        </InputGroup>
      </form>
    </FormControl>
  );
};

export default SubscriptionForm;
