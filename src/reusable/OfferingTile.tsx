import { Button, Card, Row, Col } from "react-bootstrap"
import { IOffering } from "../types/Offering";

interface IOfferingTileProps extends IOffering {
    onProceedBuy: Function
}

const OfferingTile = (props: IOfferingTileProps): JSX.Element => {

    const { id, title, description, imgSrc, price, onProceedBuy } = props;

    return <Card>
        <Row>
            <Col>
                <Card.Img className="card-img-left" src={imgSrc} alt={`${title} img`} height={200} />
            </Col>
            <Col>
                <Card.Body>
                    <Row>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="text-muted">{price}</Card.Subtitle>
                    </Row>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Button variant="primary" onClick={() => onProceedBuy(id)}>{'Proceed to buy'}</Button>
                </Card.Body>
            </Col>
        </Row>
    </Card>
}

export default OfferingTile;