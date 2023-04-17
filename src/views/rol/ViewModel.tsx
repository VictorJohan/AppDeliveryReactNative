import React, { useState } from 'react'
import { useUsuario } from '../../hooks/useUsuario'
import { UsuarioService } from '../../services/UsuarioService';
import { Rol } from '../../models/Rol';

export const RolViewModel = () => {
    const { usuario } = useUsuario();

    
    

    return { usuario }
}
