export default function errorController (code, err, res) {
    console.log('ERROR: ',err);
    var error = err;
    if(err.message){error=err.message}
      return res.status(code).json({ message: error});
    };