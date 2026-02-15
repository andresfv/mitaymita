import { getDb } from '../../utils/db';

/**
 * Elimina un place de la base de datos.
 */
export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID requerido'
    });
  }

  try {
    const db = await getDb();

    await db.run('DELETE FROM places WHERE id = ?', [id]);

    return { success: true };
    
  } catch (error) {
    console.error('Error al eliminar place:', error);
    throw createError('Error al eliminar el comercio');
  }
});