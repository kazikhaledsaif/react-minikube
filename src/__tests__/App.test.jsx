// src/__tests__/App.test.js
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders welcome message', () => {
  render(<App />)
  const headingElement = screen.getByText((content, element) =>
    content.startsWith('Click on the Vite and React logos'),
  )
  expect(headingElement).toBeInTheDocument()
})
