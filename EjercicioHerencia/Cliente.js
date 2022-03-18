class Cliente extends Persona{
	static contadorClientes=0;
		constructor(fechaRegistro){
			this._cliente=++Cliente.contadorClientes;
			this._fechaRegistro=fechaRegistro;
		}

		get cliente(){
			return this._cliente;
		}

		get fechaRegistro(){
			return this._fechaRegistro;
		}

		set fechaRegistro(fechaRegistro){
			return this._fechaRegistro=fechaRegistro;
		}

		toString(){
			return `${super.toString()} ${this._cliente}, ${this._fechaRegistro}`
		}
}
