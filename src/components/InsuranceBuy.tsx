import { Col, Container, Form, Row, Stack } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { ActionButton } from "./reusable/ActionButton";
import { PageHeading } from "./reusable/PageHeading";
import { useEffect, useState } from "react";
import { getOfferingById } from "../api";
import { IOffering } from "../types/Offering";
import OfferingTile from "./reusable/OfferingTile";
import { BuyForm } from "./BuyForm";


interface INavigatedState {
    offeringId?: number
}
export function InsuranceBuy(): JSX.Element {

    const navigate = useNavigate();
    const { state } = useLocation();
    const [offering, setOffering] = useState<IOffering | undefined>(undefined);
    
    const onGoBack = () => {
        navigate('/');
    }

    const offeringId = (state as INavigatedState).offeringId;


    useEffect(() => {
        if (offeringId) {
            const offering = getOfferingById(offeringId);
            setOffering(offering)
        }
    }, [offeringId])

    return <div>
        <Container>
            <Row className="justify-content-md-center mt-5 mb-5">
                <Col md="auto">
                    <PageHeading title="Insurance Buy" />
                </Col>
            </Row>
            <Stack gap={3}>
                <h4>
                    Currently in Cart <ActionButton variant="outline-primary" onClickHandler={onGoBack} message="go back" />
                </h4>
                {offering ? <OfferingTile key={offering.id} {...offering} /> : ''}
                <BuyForm/>
            </Stack>
        </Container>
    </div>
}