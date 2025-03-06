import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className="bg-purple-700 text-white py-6 px-10 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                {/* Sección de enlaces */}
                <ul className="space-y-3 mb-5 md:mb-0">
                    <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Nosotros</li>
                    <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Cinéfilos en Línea</li>
                    <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Contacto</li>
                </ul>

                {/* Redes sociales */}
                <div className="flex space-x-6 text-2xl">
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="hover:text-blue-400 transition duration-300"
                    >
                        <i className="bi bi-instagram"></i>
                    </motion.a>

                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="hover:text-blue-400 transition duration-300"
                    >
                        <i className="bi bi-facebook"></i>
                    </motion.a>

                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="hover:text-blue-400 transition duration-300"
                    >
                        <i className="bi bi-twitter-x"></i>
                    </motion.a>
                </div>
            </div>

            {/* Texto de copyright */}
            <div className="text-center mt-5 text-sm text-white">
                © {new Date().getFullYear()} Camila Valderrama. Todos los derechos reservados.
            </div>
        </footer>
    )
}

export default Footer
