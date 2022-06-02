import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it.skip('should render "Login" text if user is not logged', () => {
    // const userLogged = false // TODO: implement functionality
    render(<Navbar />)
    const LoginText = screen.getByText('Login')
    expect(LoginText).toBeInTheDocument()
  })
  it.skip('should render "Logout" text if user is logged', () => {
    // const userLogged = true // TODO: implement functionality
    render(<Navbar />)
    const LogoutText = screen.getByText('Logout')
    expect(LogoutText).toBeInTheDocument()
  })
  it('should render title of the app', () => {
    render(<Navbar />)
    const Title = screen.getByText('Pokedex')
    expect(Title).toBeInTheDocument()
  })
})