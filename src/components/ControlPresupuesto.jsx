import { useEffect, useState } from "react"

const ControlPresupuesto = ({ gastos, presupuesto }) => {

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)


    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado;

        setGastado(totalGastado)
        setDisponible(totalDisponible)
    }, [gastos])

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
                    <span>Disponible: </span>{formatearCant(disponible)}
                </p>
                <p>
                    <span>Gastado: </span>{formatearCant(gastado)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto