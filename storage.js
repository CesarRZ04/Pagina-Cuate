const multer=require('multer');
const path=require('path');

const storage= multer.diskStorage({
    destination: function (req, file,cb){
        cb(null, path.join(__dirname,'/alumnos'))
    },

    filename: function (req, file, cb){
        let ext=file.originalname;
        ext=ext.substring(ext.length-3, ext.length);
        cb(null, file.fieldname + '-' + Date.now()+'.'+ext)

    }
});

const upload = multer ({storage});

module.exports=upload;