export interface Veterinaria {
	_id?: string;
	nombre: string;
	direccion: string;
}

export const veterinariaInitialState: Veterinaria = {
	nombre: "",
	direccion: "",
};
