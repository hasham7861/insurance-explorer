import { Col, Container, Row, Stack } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { getAllInsuranceOfferings } from "../api/offering/offering.api";
import OfferingTile from "./reusable/OfferingTile"
import { PageHeading } from "./reusable/PageHeading";

export function InsuranceList(): JSX.Element {
    let navigate = useNavigate();

    const onProceedBuyHandler = (offeringId: number) =>{
        navigate('/buy', {state: {offeringId}})
    }

    const offeringTiles = () => {
        return getAllInsuranceOfferings().map((offering)=>
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