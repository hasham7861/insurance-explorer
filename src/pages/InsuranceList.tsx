import { Col, Container, Row, Stack } from "react-bootstrap"
import { insuranceOfferings } from "../api/offering.data"
import OfferingTile from "../reusable/OfferingTile"
import { PageHeading } from "../reusable/PageHeading";

export function InsuranceList(): JSX.Element {

    const onProceedBuyHandler = (offeringId: number) =>{
        console.log('Implement Buy logic here', offeringId);
    }

    const offeringTiles = () => {
        return insuranceOfferings.map((offering)=>
            <OfferingTile key={offering.id} onProceedBuy={onProceedBuyHandler} {...offering}/>
        )
    } 
      
    return  (
        <Container>
            <Row className="justify-content-md-center mt-5 mb-5">
                <Col md="auto">
                    <PageHeading title="Insurance Explorer" />
                </Col>
            </Row>
            <Stack gap={3}>
                {offeringTiles()}
            </Stack>
        </Container>
    )
}