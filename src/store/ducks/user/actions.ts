import { action } from "typesafe-actions";
import { Usuario, UserTypes } from "./types";

export const getUsuario = (payload: Usuario) => action(UserTypes.GET_USER_INFO, payload)