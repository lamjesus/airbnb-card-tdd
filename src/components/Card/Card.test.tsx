import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('should render Card component', () => {
    render(<Card />)
    const text = screen.getByText('Hello World')
     expect(text).toBeInTheDocument()
  })
})
