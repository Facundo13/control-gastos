import { useEffect, useState } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({ gastos, presupuesto, setGastos, setPresupuesto, setIsValidPresupuesto }) => {

    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado;

        //Calcular porcentaje gastado
        const nuevoPorcentaje = 100 - (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)


        setGastado(totalGastado)
        setDisponible(totalDisponible)
        setTimeout(() => {
            if(nuevoPorcentaje <= 0){
                setPorcentaje(0)
                return
            }
            setPorcentaje(nuevoPorcentaje)
        }, 500)
    }, [gastos])

    const formatearCant = (cant) => {
        return cant.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?')
        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        }
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar 
                    value={porcentaje} 
                    styles={buildStyles({
                        pathColor: '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje == 0 ? '#DC2626' : '#3B82F6'
                    })}
                    text={`${porcentaje}% Restante`}
                />
            </div>
            <div className="contenido-presupuesto">
                <button className="reset-app" type="button" onClick={handleResetApp}>Resetear App</button>
                <p>
                    <span>Presupuesto: </span>{formatearCant(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
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