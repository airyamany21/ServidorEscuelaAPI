const cursoModel=require('../models/cursosModel');//obtiene la ruta de los métodos

//muestra cursos
function  getAllCursos (req,res){
	console.log("Entro");//para ver si entra al código
	cursoModel.findAll().then((cursos) =>{
		return res.status(200).send(cursos);
	}).catch(err =>
	{
		res.status(500).send('No se encontraron Cursos');
	});
}

//muestra curso por CLAVE
function getCursoClave(req, res){
	console.log("Entro");//para ver si entra al código
	console.log(req.params.clave);//para ver la peticion
	cursoModel.findByClave(req.params.clave).then((curso) => {
		res.status(200).json(curso);
	}).catch(err => {
		res.status(500).json({error: "No encontrado"});
	});
}

// //borra curso por CLAVE
function deleteCursoClave(req,res) {
	if(cursoModel.eraseClave(req.params.clave)){
		res.status(200).json({msg:`Clave: ${req.params.clave} deleted succesfully`})
	} else {
		res.status(500). json({error:`could not delete matricula: ${req.params.clave}`})
	}
};


//crea estudiante POST
function  createCurso(req, res){
	console.log("Entro");//para ver si entra al código
	console.log(req.body);//para ver cuerpo de la petición
	let r = cursoModel.addCurso(req.body);
	if (r) {
		res.status(200).json({msg:`Cueso: ${req.params.curso} creada`})
	} else {
		res.status(500).json({error: "No se pudo crear"});
	}
};


// //actualiza estudiante PUT
function  put (req, res){
	console.log("Entrodsfsdfssd");//para ver si entra al código

	let r = cursoModel.putCurso(req.body);
	if (r) {
		res.send(String(r));
	} else {
		res.status(500).json({error: "No se pudo crear"});
	}
}

function patch (req, res){
	console.log("Entro");//para ver si entra al código
	let r = cursoModel.savePatch(req.body);
	if(r){
		res.send(String(r));
	}else{
		res.status(500).json({error: "No existe"});
	}
}

//muestra cursosEstudiante
function  getAllCursosEstudiante (req,res){
	cursoModel.findAllCurso(req.params.clave).then((curso) =>{
		res.status(200).json(curso);

		res.status(200).json(req.body);
	}).catch(err =>
	{
		res.status(500).send('No se encontraron Cursos');
	});
}

//exporta las funciones
exports.getAllCursos = getAllCursos;
exports.getCursoClave = getCursoClave;
exports.deleteCursoClave= deleteCursoClave;
exports.createCurso=createCurso;
exports.put=put;
exports.patch=patch;
exports.getAllCursosEstudiante=getAllCursosEstudiante;
