import { toast } from 'vue-sonner';

export const useSplitUpStore = defineStore('split-up', () => {

    const members = ref<Member[]>([]);
    const selectedMember = ref<Member | null>(null);

    const getMembers = async () => {
        members.value = await $fetch<Member[]>('/api/members');
    };

    const addMember = async (member?: Member) => {
        try {
            // Validar nombre
            const memberName = member?.name?.trim() || 'Nuevo Participante';
            if (memberName.length < 1) {
                toast.error('El nombre del miembro es requerido');
                return;
            }
            if (memberName.length > 50) {
                toast.error('El nombre no puede exceder 50 caracteres');
                return;
            }

            // Validar nombres duplicados
            const existingMember = members.value.find(m =>
                m.name.toLowerCase() === memberName.toLowerCase()
            );

            if (existingMember) {
                toast.error('Ya existe un miembro con ese nombre');
                return;
            }

            const newMember: Member = await $fetch<Member>('/api/members', {
                method: 'POST',
                body: { name: memberName.trim(), active: member?.active ?? false }
            })

            if (!newMember) {
                toast.error('Error al crear el miembro');
                return;
            }
            members.value.push(newMember);
            toast.success('Miembro agregado correctamente');

        } catch {
            showError({
                statusCode: 500,
                statusMessage: 'Error del servidor al agregar miembro'
            });
        };
    };

    const updateMember = async (member: Member) => {
        try {
            // Validar que el miembro existe
            if (!member.id) {
                toast.error('ID del miembro es requerido');
                return;
            }

            // Validar nombre
            if (!member.name?.trim()) {
                toast.error('El nombre del miembro es requerido');
                return;
            }

            if (member.name.length > 50) {
                toast.error('El nombre no puede exceder 50 caracteres');
                return;
            }

            // Validar que el miembro existe en la lista local
            const existingMember = members.value.find(m => m.id === member.id);
            if (!existingMember) {
                toast.error('El miembro no existe');
                return;
            }

            await $fetch(`/api/members/${member.id}`, {
                method: 'PUT',
                body: {
                    name: member.name.trim(),
                    active: member.active,
                }
            });

            toast.success('Miembro actualizado correctamente');

        } catch {
            showError({
                statusCode: 500,
                statusMessage: 'Error del servidor al actualizar miembro'
            });
        }
    };

    const deleteMember = async (member: Member) => {
        try {

            // Validar que no sea el último miembro activo
            const activeMembers = members.value.filter(m => m.active && m.id !== member.id);
            if (activeMembers.length === 0) {
                throw new Error('No puedes eliminar el último miembro activo');
            }

            // Validar que el miembro existe
            if (!members.value.find(m => m.id === member.id)) {
                throw new Error('El miembro no existe');
            }

            await $fetch<string>(`/api/members/${member.id}`, {
                method: 'DELETE',
            });

            members.value = members.value.filter(m => m.id !== member.id);

            toast.success('Miembro eliminado correctamente');
        } catch {
            showError({
                statusCode: 500,
                statusMessage: 'Error del servidor al eliminar miembro'
            });
        };
    };

    return {
        //properties
        members,
        selectedMember,

        //actions
        getMembers,
        addMember,
        updateMember,
        deleteMember,
    };
},);