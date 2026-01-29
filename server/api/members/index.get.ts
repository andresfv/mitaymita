import { getDb } from '../../utils/db';

/**
* Obtiene la lista de miembros desde la base de datos.
 */
export default defineEventHandler(async () => {
    const db = await getDb();
    const members = await db.all('SELECT * FROM members');
    
    return members.map(member => ({
        id: member.id,
        name: member.name,
        active: Boolean(member.active),
    }));
});
