import { ReactNode } from "react"

export type StateItemType = {
    stateName: string,
    stateId: number,
}

export type DistrictItemType = {
    districtName: string,
    districtId: number,
    stateId: number,
}

export type CardType = {
    children: ReactNode,
    classes?: string | '',
}