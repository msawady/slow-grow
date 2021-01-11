import React from "react"
import { Container, Navbar, NavbarBrand } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Header(): React.ReactElement {
  return (
    <Container fluid>
      <Navbar color="light" full>
        <NavbarBrand href="/">Slow Grow</NavbarBrand>
      </Navbar>
    </Container>
  )
}
