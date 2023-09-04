import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req,file,callback) => {
        callback(null, 'uploads/')
    },
    filename:(req,file,callback) => {
        const [filename, extension] = file.originalname.split('.')
        const {mimetype} = file
        
        if(mimetype !== 'image/png'){
            callback(new Error('Invalid mimetype'))
        }

        callback(null, `${filename}_${Date.now()}.${extension}`)
    }
})

const upload = multer({ storage })

export { upload }