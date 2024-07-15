// __tests__/FormDocentes.test.js

import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormDocentes from './formRegistro';
import useApiRequest from '../../../../../Hooks/api';

// Mock the useApiRequest hook
jest.mock('../../../../../Hooks/api');

describe('FormDocentes Integration Test', () => {
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
    render(<FormDocentes />);
    

    fireEvent.click(screen.getByText('Crear Estudiante'));

    await waitFor(() => {
        expect(screen.getByText('el campo cedula esta vacio')).toBeInTheDocument();
        expect(screen.getByText('el campo nombre esta vacio')).toBeInTheDocument();
        expect(screen.getByText('el campo apellido esta vacio')).toBeInTheDocument();
        expect(screen.getByText('el campo correo esta vacio')).toBeInTheDocument();
        expect(screen.getByText('el campo CodigoGrupo esta vacio')).toBeInTheDocument();



    });
  });

  it('debe enviar el formulario cuando todos los campos sean válidos', async () => {
    render(<FormDocentes />);

    fireEvent.change(screen.getByLabelText('Cedula'), { target: { value: '12341123' } });
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Apellido'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'john.doe@unicesar.edu.co' } });
    fireEvent.change(screen.getByLabelText('Grupo'), { target: { value: '1' } });

    const file = new File(['photo'], 'photo.png', { type: 'image/png' });
    const input = screen.getByLabelText('Subir Foto');
    fireEvent.change(input, { target: { files: [file] } });

    fireEvent.click(screen.getByText('Crear Estudiante'));

    await waitFor(() => {
      expect(mockSendRequest).toHaveBeenCalledWith(
        'http://localhost:3001/api/v1/estudiantes/',
        'POST',
        expect.any(FormData),
        { 'Content-Type': 'multipart/form-data' }
      );
    });

    await waitFor(() => {
      expect(screen.getByText('Estudiante registrado')).toBeInTheDocument();
    });
  });

  it('debería mostrar un mensaje de error si falla la solicitud de API', async () => {
    mockSendRequest.mockRejectedValueOnce(new Error('API Error'));

    render(<FormDocentes />);

    fireEvent.change(screen.getByLabelText('Cedula'), { target: { value: '1234567850' } });
    fireEvent.change(screen.getByLabelText('Nombre'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Apellido'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByLabelText('Correo'), { target: { value: 'john.doe@unicesar.edu.co' } });
    fireEvent.change(screen.getByLabelText('Grupo'), { target: { value: '1' } });

    const file = new File(['photo'], 'photo.png', { type: 'image/png' });
    const input = screen.getByLabelText('Subir Foto');
    fireEvent.change(input, { target: { files: [file] } });

    fireEvent.click(screen.getByText('Crear Estudiante'));

    await waitFor(() => {
      expect(screen.getByText('No se pudo procesar la solicitud')).toBeInTheDocument();
    });
  });
});
