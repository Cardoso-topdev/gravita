import { FC } from 'react';
import { Box, Button, Heading, HStack, BoxProps } from '@chakra-ui/react';
import { object, string, SchemaOf } from 'yup';
import { FormInput } from '../FormInput';
import { FormTextarea } from '../FormTextarea';
import { useFormValidation } from 'hooks/useFormValidation';
import { BsGlobe } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { typography } from 'theme/typography';

interface Form {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  bio: string;
  website?: string;
  github?: string;
}

const DEFAULT: Form = {
  firstName: '',
  phoneNumber: '',
  lastName: '',
  email: '',
  bio: '',
  website: '',
  github: ''
};

const SCHEMA: SchemaOf<Form> = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().required().email(),
  phoneNumber: string().required(),
  bio: string().required(),
  website: string(),
  github: string(),
});

interface Props extends BoxProps {}

export const SettingsForm: FC<Props> = (props) => {
  const { errors, values, disabled, handleChange, handleSubmit } = useFormValidation(
    DEFAULT,
    SCHEMA,
  );

  const onSubmit = async (data: Form): Promise<void> => {};

  return (
    <Box p={30} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack>
          <FormInput
            autoComplete="off"
            id="firstName"
            error={errors.firstName}
            onChange={handleChange}
            label="First Name"
            name="firstName"
            type="text"
            variant="flushed"
          />
          <FormInput
            autoComplete="off"
            id="lastName"
            error={errors.lastName}
            onChange={handleChange}
            label="Last Name"
            name="lastName"
            type="text"
            variant="flushed"
          />
        </HStack>
        <FormInput
          autoComplete="off"
          id="phoneNumber"
          error={errors.phoneNumber}
          onChange={handleChange}
          label="Phone Number"
          name="phoneNumber"
          type="text"
          variant="flushed"
          value={values.phoneNumber}
          
        />
        <FormTextarea
          autoComplete="off"
          id="bio"
          error={errors.bio}
          onChange={handleChange}
          label="Profile Details"
          name="bio"
          variant="flushed"
          labelColor="white"
        />
        <Box mt={10}>
          <Heading as="h3" {...typography.h3}>
            Links
          </Heading>
          <FormInput
            autoComplete="off"
            id="website"
            error={errors.website}
            onChange={handleChange}
            label="WEBSITE/PORTFOLIO"
            name="website"
            type="text"
            variant="flushed"
            labelStyle={typography.titleSM}
            icon={BsGlobe}
          />
          <FormInput
            autoComplete="off"
            id="github"
            error={errors.github}
            onChange={handleChange}
            label="GITHUB"
            name="github"
            type="text"
            variant="flushed"
            labelStyle={typography.titleSM}
            icon={AiFillGithub}
          />
        </Box>

        <Button mt={20} type="submit" color="black" bg="teal">
          Save
        </Button>
      </form>
    </Box>
  );
};
