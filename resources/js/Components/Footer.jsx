import { Facebook, Instagram, Twitter, CreditCard, LocalAtm } from '@mui/icons-material';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <h4 className="font-bold mb-2">Links Rápidos</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Contato</h4>
                    <p>Email: suporte@loja.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                    <p>Endereço: Rua Exemplo, 123, São Paulo</p>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Siga-nos</h4>
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook">
                            <Facebook fontSize="large" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Instagram fontSize="large" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <Twitter fontSize="large" />
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Formas de Pagamento</h4>
                    <div className="flex space-x-4">
                        <CreditCard fontSize="large" />
                        <LocalAtm fontSize="large" />
                    </div>
                    <p>Aceitamos cartões de crédito, débito, boleto bancário e PIX.</p>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p>&copy; {new Date().getFullYear()} Loja. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
