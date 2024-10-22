import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {

    return (
        
        <nav className="bg-gray-200 shadow-gray-300 shadow-md h-[15%] min-h-16 flex px-4 py-2 items-center">

            <div className="flex justify-center items-center w-[20%] h-full">
                <a
                    href="/"
                    className="font-bold text-3xl text-blue-900 font-impact"
                    aria-label="Página inicial LivrariaDigital"
                >
                    LivrariaDigital
                </a>
            </div>

            <div className="flex justify-center items-center w-[50%] h-full">
                <label htmlFor="search" className="sr-only">
                    Pesquisar
                </label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="h-[70%] w-[100%] p-2 rounded-md"
                    placeholder="Pesquisar por livros, autores, etc."
                />
            </div>

            <div className="flex justify-end items-center w-[30%] h-full space-x-4">
                <button aria-label="Notificações">
                    <NotificationsIcon
                        fontSize="medium"
                        className="text-blue-900"
                    />
                </button>
                <button aria-label="Carrinho de compras">
                    <ShoppingCartIcon
                        fontSize="medium"
                        className="text-blue-900"
                    />
                </button>
                <button aria-label="Perfil do usuário">
                    <AccountCircleIcon
                        fontSize="medium"
                        className="text-blue-900"
                    />
                </button>
            </div>
        </nav>
    );
}
