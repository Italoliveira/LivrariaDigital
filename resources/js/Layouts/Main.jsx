import Header from "@/Components/header";
import Footer from "@/Components/Footer";

export default function Main({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <nav className="bg-blue-800 space-x-2 flex items-center justify-around text-white font-semibold px-4">
                <a href="" className="hover:bg-blue-900 flex-1 text-center">Aventura</a>
                <a href="" className="hover:bg-blue-900 flex-1 text-center">Romance</a>
                <a href="" className="hover:bg-blue-900 flex-1 text-center">AutoAjuda</a>
                <a href="" className="hover:bg-blue-900 flex-1 text-center">Misterio</a>
                <a href="" className="hover:bg-blue-900 flex-1 text-center">Fantasias</a>
                <a href="" className="hover:bg-blue-900 flex-1 text-center">Ficção</a>
                <a href="" className="hover:bg-blue-900 flex-1 text-center">Administração</a>
                <a href="" className="hover:bg-blue-900 flex-1 text-center">Biografias</a>
            </nav>

            <main className="flex flex-col flex-1">{children}</main>

            <Footer />
        </div>
    );
}
