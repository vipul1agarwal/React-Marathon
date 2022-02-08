import { StateItemType } from "../components/types"
import fireDb from "../Firebase/firebase"

export  const getStateList = async() => {
    let results:StateItemType[] = []
     fireDb.child('states').on('value', (snapshot) => {
        if (snapshot.val() != null) {
            const keys = Object.keys(snapshot.val())
         results = snapshot.val()[keys[0]] as Array<StateItemType>
        }
        // } else {
        //     fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states')
        //         .then(response => response.json())
        //         .then((data:any) => {
        //             const resultArr:StateItemType[] = [];
        //             data.states.forEach((item:any) => {
        //                 resultArr.push({
        //                     stateName: item.state_name,
        //                     stateId: item.state_id,
        //                 })
        //             })
        //             fireDb.child('states').push(resultArr)
        //             results = resultArr
        //         }).catch(e => {
        //             console.log(e)
        //             results = []
        //     })
        // }
    })
    console.log(results)
    console.log('hahahahah')
    return results
}