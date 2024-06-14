
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, object){
        object(null,path.join(__dirname,'../../public/Estudiantes'))
    },
    filename: function(req,file, object){
        object(null, `image${Date.now()}.${file.mimetype.split('/')[1]}`)
    }
})

module.exports = storage