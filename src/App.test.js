import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Components/Header';
import Section from './Components/Section'

test('Deve conter uma secao de apresentacao', () => {
  render(<Section />);

  const sessaoElement = screen.getByText('Repositorios do GitHub')
  expect(sessaoElement).toBeInTheDocument();
});

test("Deve contem um botao para a pesquisa", () => {
  render(<Section />);
  const botaoPesquisar = screen.getByRole('button');
  expect(botaoPesquisar).toBeInTheDocument();
})
