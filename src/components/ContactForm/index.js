import PropTypes from 'prop-types';
import { useState } from 'react';
import FormGroup from '../FormGroup';
import { ButtonContainer, Form } from './styles';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import isEmailValid from '../../utils/isEmailValid';
import useErrors from '../../hooks/useErrors';
import formatPhone from '../../utils/formatPhone';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    setError, removeError, getErrorMessageByFieldName, errors,
  } = useErrors();

  const isFormValid = (name && errors.length === 0);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'Email inválido' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChage(event) {
    setPhone(formatPhone(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          value={name}
          type="text"
          placeholder="Nome *"
          onChange={(event) => handleNameChange(event)}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          value={email}
          type="email"
          placeholder="E-mail"
          onChange={(event) => handleEmailChange(event)}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>
      <FormGroup>
        <Input
          value={phone}
          type="text"
          placeholder="Telefone"
          onChange={(event) => handlePhoneChage(event)}
          maxLength="15"
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Categoria</option>
          <option value="instagram">Instagram</option>
          <option value="discord">Discord</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
