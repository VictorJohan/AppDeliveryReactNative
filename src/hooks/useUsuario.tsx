import React, { useEffect, useState } from 'react'

import { Usuario } from '../models/Usuario'
import { LocalData } from '../data/LocalData';

export const useUsuario = () => {

  const { get, remove } = LocalData();
  const [usuario, setUsuario] = useState<Usuario>();

  useEffect(() => {
    getUsuario();
  }, [])

  const getUsuario = async () => {
    const usuario = (await get('usuario'));
    if(usuario !== undefined){
      setUsuario(JSON.parse(usuario));
    }else{
      setUsuario(undefined);
    }
  }

 
  return { usuario}
}
