// import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import "./miComponente.css";

const OBTENER_DATOS = gql`
  query {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

const MiComponente = () => {
  const { loading, error, data } = useQuery(OBTENER_DATOS);

  console.log(data)

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="chat-notification">
      <div className="chat-notification-logo-wrapper"></div>
      <div className="chat-notification-content">
        <p className="chat-notification-message">You have a new message!</p>
      </div>
    </div>
  );
};

export default MiComponente;