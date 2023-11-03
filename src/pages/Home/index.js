import {
  Card,
  Container, Header, ListContainer, InputSearchContainer,
} from './styles';
import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>
      <Header>
        <strong>
          3 Contatos
        </strong>
        <a href="/">Novo Contato</a>
      </Header>
      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Ordernar por nome" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Name</strong>
              <small>instagram</small>
            </div>
            <span>email</span>
            <span>telefone</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Name</strong>
              <small>instagram</small>
            </div>
            <span>email</span>
            <span>telefone</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Name</strong>
              <small>instagram</small>
            </div>
            <span>email</span>
            <span>telefone</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="edit" />
            </a>
            <button type="button">
              <img src={trash} alt="delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
