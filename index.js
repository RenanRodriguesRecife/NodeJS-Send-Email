const nodemailer = require('nodemailer');


const transport = nodemailer.createTransport({
    //pesquise sntp + o nome do serviço de email
    //para verificar o host e a porta
    //2022 - hotmail
    // host: 'smtp-mail.outlook.com',
    // port: 587,
    host: '',
    port: 0,
    secure: false, //true para porta 465 e false para outras
    auth:{
        user: 'email@email.com',
        pass: 'password',
    }
})


transport.sendMail({
    from: 'email@email.com',
    to: 'email1, email2',
    subject: 'conteudo do email',
    html: '<h1>Oi esse mail foi enviado usado um Nodemailer<h1>',
    text: 'texto alternativo caso o html não seja enviado'
})
.then((response)=> console.log('Email enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar email:',err));

