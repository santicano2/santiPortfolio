import { useState } from 'react'
import Section from './section'
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea
} from '@chakra-ui/react'

const initValues = { name: '', email: '', subject: '', message: '' }
const initState = { values: initValues }

const ContactForm = () => {
  const [state, setState] = useState(initState)
  const { values } = state

  const handleChange = ({ target }) =>
    setState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }))

  return (
    <Section delay={0.4}>
      <Heading as="h3" variant="section-title" mb={8}>
        Contáctame
      </Heading>

      <FormControl isRequired isInvalid={!values.name} mb={4}>
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
        />
        <FormErrorMessage>Requerido</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={!values.name} mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <FormErrorMessage>Requerido</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={!values.name} mb={4}>
        <FormLabel>Asunto</FormLabel>
        <Input
          type="text"
          name="subject"
          value={values.subject}
          onChange={handleChange}
        />
        <FormErrorMessage>Requerido</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={!values.name} mb={4}>
        <FormLabel>Mensaje</FormLabel>
        <Textarea
          type="text"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
        />
        <FormErrorMessage>Requerido</FormErrorMessage>
      </FormControl>
    </Section>
  )
}

export default ContactForm
