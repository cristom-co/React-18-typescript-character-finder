import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';

import ModalComments from '../components/ModalComments';
import ButtonsFilter from '../components/ButtonsFilter';
import Dropdown from '../components/Dropdown';
import RootProvider from '../context/rootContext';

test("valida que exista el boton comments", () => {
    const { getByText } = render(<ModalComments children />);
    const boton = getByText('Comments');
    expect(boton).toBeInTheDocument();
    expect(boton.tagName).toBe('BUTTON');
})

test("valida que se cree correctamente el boton de la opcion test2", () => {
    const { getByText } = render(<ButtonsFilter action={() => null} currentValue='' options={['','test1', "test2"]} title='title buttons' />);
    const boton = getByText('test2');
    expect(boton).toBeInTheDocument();
    expect(boton.tagName).toBe('BUTTON');
})

test("valida que la funcion del dropDown de mostra y ocultar funcione", () => {
    const { getByTestId } = render(
      <RootProvider>
        <Dropdown />
      </RootProvider>
    );
    fireEvent.click(getByTestId('toggleDropdown'));
    expect(getByTestId('boxDropdown')).toBeInTheDocument();
})
