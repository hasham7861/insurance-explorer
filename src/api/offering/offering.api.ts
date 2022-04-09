import { IOffering } from "../../types/Offering";
import { insuranceOfferings } from "./offering.data";

export function getAllInsuranceOfferings(): IOffering[] {
    return insuranceOfferings;
}

export function getOfferingById(offeringId: number): IOffering | undefined{
    return getAllInsuranceOfferings().find(offering => offering.id === offeringId)
}