import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import {createFakeContact} from '../utils/createFakeContact.js';



const generateContacts = async (number) => {
    const data = await readContacts();
    for (let i = 0; i < number; i += 1){
        data.push(createFakeContact());
    }
    await writeContacts(data);
};

generateContacts(5);
