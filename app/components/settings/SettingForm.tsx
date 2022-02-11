import { FC, FocusEvent } from 'react';
import { Box, Heading, HStack, BoxProps, useToast } from '@chakra-ui/react';
import { object, string, SchemaOf } from 'yup';
import { BsGlobe } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { FormInput } from '../FormInput';
import { FormTextarea } from '../FormTextarea';
import { Loader } from 'components/Loader';
import { useFormValidation } from 'hooks/useFormValidation';
import { useAuthContext } from 'context/AuthContext';
import { updateProfile } from 'lib/base/profiles';
import { typography } from 'theme/typography';

interface Form {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  bio: string;
  website?: string;
  github?: string;
}

const DEFAULT: Form = {
  first_name: '',
  last_name: '',
  phone: null,
  email: '',
  bio: '',
  website: '',
  github: '',
};

const SCHEMA: SchemaOf<Form> = object({
  first_name: string().required(),
  last_name: string().required(),
  email: string().required().email(),
  phone: string().min(10).required(),
  bio: string().required(),
  website: string(),
  github: string(),
});

interface Props extends BoxProps {}

export const SettingsForm: FC<Props> = (props) => {
  const { loading, profile } = useAuthContext();

  const { errors, values, handleChange } = useFormValidation(DEFAULT, SCHEMA);

  const toast = useToast();

  const handleOnBlur = async (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const savableValue = values[event.target.name];

    const inputError = errors[event.target.name];

    if (!savableValue || inputError || !profile?.email) {
      return;
    }

    const partialProfile = {
      email: profile?.email,
      [event.target.name]: savableValue,
    };

    const { error } = await updateProfile(partialProfile);

    if (error) {
      toast({
        title: 'Oops something went wrong',
        isClosable: true,
        status: 'error',
      });
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Box p={30} {...props}>
      <form>
        <HStack>
          <FormInput
            autoComplete="off"
            defaultValue={profile.first_name}
            id="firstName"
            error={errors.first_name}
            onChange={handleChange}
            onBlur={handleOnBlur}
            label="FIRST NAME"
            name="first_name"
            type="text"
            variant="flushed"
            labelStyle={typography.titleSM}
          />
          <FormInput
            autoComplete="off"
            defaultValue={profile.last_name}
            id="lastName"
            error={errors.last_name}
            onChange={handleChange}
            onBlur={handleOnBlur}
            label="LAST NAME"
            name="last_name"
            type="text"
            variant="flushed"
            labelStyle={typography.titleSM}
          />
        </HStack>
        <FormInput
          autoComplete="off"
          id="phone"
          error={errors.phone}
          onChange={handleChange}
          onBlur={handleOnBlur}
          label="PHONE NUMBER"
          name="phone"
          type="text"
          variant="flushed"
          value={values.phone ?? profile.phone}
          labelStyle={typography.titleSM}
        />
        <FormInput
          autoComplete="off"
          defaultValue={profile.email}
          id="email"
          error={errors.email}
          onChange={handleChange}
          onBlur={handleOnBlur}
          label="EMAIL ADDRESS"
          name="email"
          type="email"
          variant="flushed"
          labelStyle={typography.titleSM}
        />
        <FormTextarea
          autoComplete="off"
          defaultValue={profile.bio}
          id="bio"
          error={errors.bio}
          onChange={handleChange}
          onBlur={handleOnBlur}
          label="PROFILE DETAILS"
          name="bio"
          variant="flushed"
          labelStyle={typography.titleSM}
        />
        <Box mt={10}>
          <Heading as="h3" {...typography.h3}>
            Links
          </Heading>
          <FormInput
            autoComplete="off"
            defaultValue={profile.website}
            id="website"
            error={errors.website}
            onChange={handleChange}
            onBlur={handleOnBlur}
            label="WEBSITE/PORTFOLIO"
            name="website"
            type="text"
            variant="flushed"
            labelStyle={typography.titleSM}
            icon={BsGlobe}
          />
          <FormInput
            autoComplete="off"
            defaultValue={profile.github}
            id="github"
            error={errors.github}
            onChange={handleChange}
            onBlur={handleOnBlur}
            label="GITHUB"
            name="github"
            type="text"
            variant="flushed"
            labelStyle={typography.titleSM}
            icon={AiFillGithub}
          />
        </Box>
      </form>
    </Box>
  );
};
