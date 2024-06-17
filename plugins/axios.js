import https from 'https';

export default function ({ $axios, redirect, store }) {
    $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });
    
    $axios.onRequest(config => {
        //console.log(1)
        store.commit('BtnLoading', true)
    })

    $axios.onError(error => {
        //console.log(1)
        if(!error.response){   
            //console.log(2)
            return false
        }
        if(error.response.status === 500 || error.response.status === 401 ) {
            //console.log(3)
            return false
        }
        else{
            //console.log(4)
            return false
        }
        //console.log(5)
        store.commit('BtnLoading', false)
    })

    $axios.onResponse(response => {
        //console.log(6)
        store.commit('BtnLoading', false)
    })

    $axios.onRequestError(err=> {
       // console.log(7)
        store.commit('BtnLoading', false)
    })

    $axios.onResponseError(err=> {
        //console.log(8)
        store.commit('BtnLoading', false)
    })
}