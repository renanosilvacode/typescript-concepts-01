import { Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    
    const user = createUser({
        name: 'Renan Silva',
        email: 'renanosilva@gmail.com',
        password: '123456',
        techs: [
            'C#', 
            'NodeJS', 
            'React',
            { title: 'JavaScript', experience: 100},
        ],
    })
    
    

    return response.json({ message: 'Hello World'});
}