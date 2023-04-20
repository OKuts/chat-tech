export class ApiController {
    sayHello(req, res) {
        console.log('I am controller');
        res.json({
            msg: 'Hello from controller'
        });
    }
}
