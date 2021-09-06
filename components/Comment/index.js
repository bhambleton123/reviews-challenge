import { Card, Image, Container, Row, Col } from 'react-bootstrap';
import styles from '../../styles/Comment.module.scss';
import Stars from './Stars';

const Comment = ({ username, avatar, rating, content, images }) => {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <Card.Body>
        <Card.Title>
          <Container>
            <Row>
              <Col xs={1} md={1}>
                <Image
                  style={{ width: '40px', height: '40px' }}
                  alt={username}
                  src={avatar}
                  roundedCircle
                />
              </Col>
              <Col xs={7} md={9}>
                <Container>
                  <Row>
                    <p style={{ fontSize: '11px' }}>{username}</p>
                  </Row>
                  <Row>
                    <Stars amount={rating} outOf={5} />
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Card.Title>
        <Card.Text>{content}</Card.Text>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '90%' }}>
            {images.map((image, key) => (
              <Image
                style={{ margin: '10px', width: '200px', height: '200px' }}
                alt={`image${key}`}
                src={image}
                key={key}
                rounded
              />
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Comment;
