const nodemailer = require('nodemailer');


const transport = nodemailer.createTransport({
    //pesquise sntp + o nome do serviço de email
    //para verificar o host e a porta
    host: '',
    port: 0,
    secure: false, //true para porta 465 e false para outras
    auth:{
        user: 'email@email.com',
        pass: 'passworld',
    }
})

