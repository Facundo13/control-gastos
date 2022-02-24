
const ControlPresupuesto = ({ presupuesto }) => {


    const formatearCant = (cant) => {
        return cant.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }


    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <p>Gráfica aqui</p>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span>{formatearCant(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span>0
                </p>
                <p>
                    <span>Gastado: </span>0
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto