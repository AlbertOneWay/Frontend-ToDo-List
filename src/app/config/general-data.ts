export namespace GeneralData{
    export const BUSSINESS_URL = "http://localhost:3000";
    export const TOAST_MESSAGE_CREATION = (component: string) => `${component} se ha creado correctamente`;
    export const TOAST_ERROR_CREATION = (component: string) => `${component} no se pudo crear`;
    export const TOAST_MESSAGE_DELETE = (componente: string) => `${componente} se ha eliminado correctamente`;
    export const TOAST_MESSAGE_COMPLETE = (componente: string) => `${componente} se ha completado`;
    export const TOAST_ERROR_COMPLETE = (componente: string) => `${componente} no se ha completado`;
    export const TOAST_ERROR_DELETE = (componente: string) => `${componente} no se ha eliminado`;
    export const TOAST_MESSAGE_EDIT = (componente: string) => `${componente} se ha editado correctamente`;
    export const TOAST_ERROR_EDIT = (componente: string) => `${componente} no se ha editado`;

    export const RECORDS_BY_PAGE = 5;

    export const ARG_ELIMINACION = "Eliminación"
    export const CONFIRMACION_ELIMINACION= "¿Seguro que desea eliminar la tarea?"

    
}
