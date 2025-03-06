import React from 'react'
import { motion } from 'framer-motion'

const ButtonList = ({ SidebarOpen }) => {
    return (
        <motion.button className="fixed bottom-6 right-6 bg-blue-700 text-white font-medium py-3 px-5 rounded-full border-1 shadow-lg flex items-center space-x-2 "
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={SidebarOpen}
        >
            <i className="bi bi-list" />
            <span>Mi lista</span>

        </motion.button>
    )
}

export default ButtonList