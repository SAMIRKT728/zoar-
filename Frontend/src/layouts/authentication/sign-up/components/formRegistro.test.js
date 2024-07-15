// __tests__/UserRegistro.test.js

import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserRegistro from './formRegistro';
import useApiRequest from '../../../../Hooks/api';

// Mock the useApiRequest hook
jest.mock('../../../../Hooks/api');

describe('UserRegistro Integration Test', () => {
  const mockSendRequest = jest.fn();

  beforeEach(() => {
    useApiRequest.mockReturnValue({
      sendRequest: mockSendRequest,
      loading: false,
      error: null,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('debe mostrar mensajes de validación cuando los campos obligatorios estén vacíos', async () => {
    render(<UserRegistro />);

    fireEvent.click(screen.getByText('Registrar Usuario'));

    fireEvent.click(screen.getByText('Registrar'));

    await waitFor(() => {
      const validationMessage = /LLenar todos los campos/;
      expect(screen.getByText(validationMessage)).toBeInTheDocument();
    });
  });

  it('debe enviar el formulario cuando todos los campos sean válidos', async () => {
    render(<UserRegistro />);

    fireEvent.click(screen.getByText('Registrar Usuario'));

    fireEvent.change(screen.getByLabelText('Cédula'), { target: { value: '12341123' } });
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'john.doe@unicesar.edu.co' } });
    fireEvent.change(screen.getByLabelText('Usuario'), { target: { value: 'john_doe' } });
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText('Repetir Contraseña'), { target: { value: 'password123' } });

    fireEvent.click(screen.getByText('Registrar'));

    await waitFor(() => {
      expect(mockSendRequest).toHaveBeenCalledWith(
        'http://localhost:3001/api/v1/auth/signup',
        'POST',
        {
          username: 'john_doe',
          email: 'john.doe@unicesar.edu.co',
          password: 'password123',
          Estudiante: '12341123',
        }
      );
    });

    await waitFor(() => {
      expect(screen.getByText('Usuario registrado')).toBeInTheDocument();
    });
  });

  it('debería mostrar un mensaje de error si falla la solicitud de API', async () => {
    mockSendRequest.mockRejectedValueOnce(new Error('API Error'));

    render(<UserRegistro />);

    fireEvent.click(screen.getByText('Registrar Usuario'));

    fireEvent.change(screen.getByLabelText('Cédula'), { target: { value: '12341123' } });
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'john.doe@unicesar.edu.co' } });
    fireEvent.change(screen.getByLabelText('Usuario'), { target: { value: 'john_doe' } });
    fireEvent.change(screen.getByLabelText('Contraseña'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText('Repetir Contraseña'), { target: { value: 'password123' } });

    fireEvent.click(screen.getByText('Registrar'));

    await waitFor(() => {
      expect(screen.getByText('Error al registrar: API Error')).toBeInTheDocument();
    });
  });
});
