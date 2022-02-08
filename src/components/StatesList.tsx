import { Fragment, useEffect, useState } from "react"
import { DistrictItemType, StateItemType } from "./types"
import Card from "./UI/Card"
import Select, { OptionTypeBase } from 'react-select'
import fireDb from "../Firebase/firebase"


import { getStateList  } from "../client/StateListClient"
import './StatesList.css'

const StatesList = () => {

    const [stateItemList, setStateItemList] = useState([] as Array<StateItemType>)
    const [districtItemList, setDistrictItemList] = useState([] as Array<DistrictItemType>)


    useEffect(() => {
        fireDb.child('states').on('value', (snapshot) => {
            if (snapshot.val() != null) {
                const keys = Object.keys(snapshot.val())
             setStateItemList(snapshot.val()[keys[0]] as Array<StateItemType>)
            }
        })
    }, [])

    const stateOptions = [] as OptionTypeBase[]
    const districtOptions = [] as OptionTypeBase[]


    stateItemList.map((item)=>{
        stateOptions.push({value: item.stateId, label: item.stateName})
    })

    // const handleStateChangeEvent = (state: any) => {
    //     console.log('nananananana', state)
    //     fetch('https://cdn-api.co-vin.in/api/v2/admin/location/districts/' + state.value)
    //             .then(response => response.json())
    //             .then((data:any) => {
    //                 const resultArr:DistrictItemType[] = [];
    //                 data.districts.forEach((item:any) => {
    //                     resultArr.push({
    //                         districtName: item.district_name,
    //                         districtId: item.district_id,
    //                         stateId: state.value,
    //                     })
    //                 })
    //                 console.log(resultArr)
    //                 setDistrictItemList(resultArr)
    //                 fireDb.child('districts').push(resultArr)
    //             }).catch(e => {
    //                 console.log(e)
    //         })
    //     }

    // districtItemList.map((item)=>{
    //     districtOptions.push({value: item.districtId, label: item.districtName})
    // })

    const handleStateChangeEvent = (state: any) => {
        fireDb.child('districts').orderByChild('stateId').equalTo(state.value).on('value', (snapshot) => {
            if (snapshot.val() != null) {
                const keys = Object.keys(snapshot.val())
                console.log(keys)
                setDistrictItemList(snapshot.val()[keys[0]] as Array<DistrictItemType>)
            } else {
                console.log('lul')
            }
        })
    }

    districtItemList.map((item)=>{
        districtOptions.push({value: item.districtId, label: item.districtName})
    })
    

    return (
        <Fragment>
        <Card classes = 'states_container_basic'>
            <Select options={stateOptions} onChange={handleStateChangeEvent}/>
        </Card>
        <Card classes = 'districts_container_basic'>
            <Select options={districtOptions}/>
        </Card>
        </Fragment>
    )
}

export default StatesList