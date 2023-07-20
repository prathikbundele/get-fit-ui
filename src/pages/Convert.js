import  {useEffect, useState} from "react";
import "./styles.css"
import axios from 'axios'

const Convert = () => {
    const [formValues, setFormValues] = useState({
        gender : "",
        wear : "",
        brand : "",
        category : "",
        fitting : "",
        label : ""
    })
    const [reqValues, setReqValues] = useState({
        gender : "",
        wear : "",
        brand : "",
        category : "",
        fitting : "",
        label : ""
    })

    useEffect(() =>{
        axios.get('https://conversion-plugin.onrender.com/api/getBrands')
        .then(response => {
            console.log(response.data)
        })
    },[])

    const getBrands = () => {
        axios.get('https://conversion-plugin.onrender.com/api/getBrands')
        .then(response => {
            console.log(response.data)
        })
    }

    const getCategories = () => {
        axios.get('https://conversion-plugin.onrender.com/api/get')
        .then(response => {
            console.log(response.data)
        })
    }

    return(
        <>
            Plugin
        </>
    )
}

export default Convert