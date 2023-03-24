import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
          <Container className="p-5">
            <h1 className='text-center' >La ruta que intentas consultar no existe :/"</h1>
            <img src="https://img.freepik.com/vector-gratis/plantilla-plana-error-404_23-2147743883.jpg?w=740&t=st=1679665346~exp=1679665946~hmac=0d58d491fc7a67b228cc7fab2c2b235bf33a07ba7abb5690a3e05c440a241f6e" className="rounded mx-auto d-block" alt="Error 404" />
          </ Container>
  );
};

export default NotFound;