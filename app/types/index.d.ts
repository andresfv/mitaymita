/**
 * Definiciones de tipos TypeScript para la aplicación.
 * Estas definiciones son globales y pueden ser utilizadas en cualquier parte de la aplicación.
 * 
 */
export { };
declare global {

    /**
     * Representa un miembro que participa en las compras compartidas.
     */
    interface Member {
        id: string;
        name: string;
        active: boolean;
    }

    /**
     * Representa un lugar donde se realizan las compras.
     */
    interface Place {
        id: string;
        name: string;
    }

    /**
     * Representa una semana en el calendario para agrupar las compras.
     */
    interface Week {
        id: string;
        code: string;
        startDate: Date;
        endDate: Date;
    }

    /**
     * Representa una compra realizada en un lugar específico durante una semana determinada.
     */
    interface Purchase {
        id: string;
        week: Week;
        place: Place;
        amount: number;
        isPaid: boolean;
        createdAt: Date;
    }

    /**
     * Representa la relación entre una compra y un miembro, incluyendo la cantidad que le corresponde pagar al miembro.
     */
    interface PurchaseMember {
        purchase: Purchase;
        member: Member;
        shareAmount: number;
    }
}