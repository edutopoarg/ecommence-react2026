import styles from './TarjetaContacto.module.css';

function TarjetaContacto({ nombre, puesto, email, foto }) {
  return (
    <div className={styles.tarjeta}>
      <img src={foto} alt={nombre} />
      <h4>{nombre}</h4>
      <p>{puesto}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
}

export default TarjetaContacto;