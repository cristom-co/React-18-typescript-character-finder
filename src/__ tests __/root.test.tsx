import '@testing-library/jest-dom'
import { render } from '@testing-library/react';

import ModalComments from '../components/ModalComments';
import ButtonsFilter from '../components/ButtonsFilter';

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