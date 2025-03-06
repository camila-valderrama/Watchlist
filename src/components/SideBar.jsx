import React from 'react'

const SideBar = ({ watchlist, onClose, remove }) => {
    const placeholderImage = 'https://via.placeholder.com/100x150?text=No+Image'

    return (
        <div className="p-6 bg-violet-100 w-80 h-full shadow-lg">
            {/* Contenedor del título y botón de cerrar */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-purple-600">Mi Lista</h1>
                <i className="bi bi-x-circle text-3xl cursor-pointer text-gray-700 hover:text-red-500" onClick={onClose}></i>
            </div>

            <ul className="space-y-4">
                {watchlist.length > 0 ? (
                    watchlist.map((movie) => (
                        <li key={movie.id} className="p-4 bg-white rounded-lg shadow-md flex items-center space-x-4">
                            <img
                                src={movie.poster_path !== 'N/A' ? movie.poster_path : placeholderImage}
                                alt={`${movie.title}-poster`}
                                className="w-16 h-24 rounded-md object-cover"
                            />
                            <div className="flex-1">
                                <p className="font-semibold text-gray-800">{movie.title}</p>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 mt-2 rounded-full text-sm"
                                    onClick={() => remove(movie.id)}
                                >
                                    Quitar
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-600 text-center mt-4">No hay películas en tu lista.</p>
                )}
            </ul>
        </div>
    )
}

export default SideBar
