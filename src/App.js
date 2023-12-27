import React from "react";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import { filterData,apiUrl } from "./data";
import { useEffect,useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);
  const [category,setCategory]=useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try
    {
      let response=await fetch(apiUrl);
      let output=await response.json();
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network Problem");
    }
    setLoading(false);
  }

  useEffect(()=>
  {
    fetchData();
  },
  []);


  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
        <div>
          <Nav></Nav>
        </div>
        <div className="bg-bgDark2">
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            loading ? (<Spinner></Spinner>):(<Cards category={category} courses={courses}></Cards>)
          }
        </div>


    </div>
  );
};

export default App;
