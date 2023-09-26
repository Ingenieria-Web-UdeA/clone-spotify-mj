import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('Pruebas unitarias del componente Card', () => {
  beforeEach(() => {
    render(
      <Card
        title='Test title'
        description='Test description'
        buttonText='Test button text'
      />
    );
  });

  it('renderiza el titulo del card de manera correcta', () => {
    const renderedText = screen.getByText('Test title');
    expect(renderedText).toBeInTheDocument();
  });
});
