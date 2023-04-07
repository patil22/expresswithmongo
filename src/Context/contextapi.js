// import React, {createContext ,useState,useEffect } from "react";
// import fetchDatafromApi from "../Utils/api";
// export const Context = createContext();
// export const AppContext = (props)=>{
//     const [loading,setloading] = useState(false);
//     const [searchresult,setsearchresult] = useState(false);
//     const [selectcategory,setselectcategory] = useState("New");
//     const [mobilemenu,setmobilemenu] = useState(false);


//     useEffect(()=>{
//         fetchselectedcategoryData(selectcategory)

//     },[selectcategory]);


//     const  fetchselectedcategoryData  = (query)=>{
//         setloading(true);
//        //  fetchDatafromApi(`search/?q=${query}`).then(res)=>{


//        fetchDatafromApi(`search/?q=${query}`).then(({ res }) => {
//             console.log(res);
//             // setsearchresult(res)
//             setloading(false)
//         });
//     };

//     return{
//         <Context.Provider 

//         value = {{
//             loading,
//             setloading,
//             searchresult,
//             setsearchresult,
//             selectcategory,
//             setelectcategory,
//             mobilemenu,
//             setmobilemenu
//         }}>

//         {props.children}

//         </Context.Provider>
//     }
// }

// return (
//     <Context.Provider
//         value={{
//             loading,
//             setloading,
//             searchresult,
//             setsearchresult,
//             selectcategory,
//             setselectcategory,
          
//             mobilemenu,
//             setmobilemenu,
//         }}
//     >
//         {props.children}
//     </Context.Provider>
// );
// };

import React, { createContext, useState, useEffect } from "react";

//import { fetchDataFromApi } from "./Utils/api";
import fetchDatafromApi from "../Utils/api";
export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDatafromApi(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        });
    };

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                searchResults,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};
