import { useState } from 'react'
import Section from './section'
import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { sendContactForm } from '../lib/api'

const initValues = { name: '', email: '', subject: '', message: '' }
const initState = { values: initValues }

const ContactForm = () => {
  const [state, setState] = useState(initState)
  const [touched, setTouched] = useState({})

  const { values, isLoading } = state

  const handleChange = ({ target }) =>
    setState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }))

  const onBlur = ({ target }) =>
    setTouched(prev => ({ ...prev, [target.name]: true }))

  const onSubmit = async () => {
    setState(prev => ({
      ...prev,
      isLoading: true
    }))
    await sendContactForm(values)
  }

  return (
    <Section delay={0.4}>
      <Heading as="h3" variant="section-title" mb={8}>
        Contáctame
      </Heading>

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={4}>
        <FormLabel>Nombre</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          borderColor={useColorModeValue('black', 'whiteAlpha.300')}
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Requerido</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.email && !values.email} mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          errorBorderColor="red.300"
          borderColor={useColorModeValue('black', 'whiteAlpha.300')}
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Requerido</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.subject && !values.subject}
        mb={4}
      >
        <FormLabel>Asunto</FormLabel>
        <Input
          type="text"
          name="subject"
          errorBorderColor="red.300"
          borderColor={useColorModeValue('black', 'whiteAlpha.300')}
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Requerido</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb={4}
      >
        <FormLabel>Mensaje</FormLabel>
        <Textarea
          type="text"
          name="message"
          errorBorderColor="red.300"
          borderColor={useColorModeValue('black', 'whiteAlpha.300')}
          rows={4}
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Requerido</FormErrorMessage>
      </FormControl>

      <Button
        colorScheme={useColorModeValue('blue', 'red')}
        isLoading={isLoading}
        isDisabled={
          !values.name || !values.email || !values.subject || !values.message
        }
        onClick={onSubmit}
      >
        Enviar
      </Button>
    </Section>
  )
}

export default ContactForm
