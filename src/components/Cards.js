import React from 'react'
import Card from './Card';
import { useState } from 'react';

const Cards = (props) => {
    let courses=props.courses;
    let category=props.category;
    const [LikedCourses,setLikedCourses]=useState([]);


    function getCourses(){
        if(category==='All'){
            let allCourses=[];
            Object.values(courses).forEach((courseData)=>{
                courseData.forEach((data)=>{
                    allCourses.push(data);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];
        }
    }
    // console.log(getCourses());
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map((course)=>(
                <Card
                 course={course}
                 LikedCourses={LikedCourses}
                 setLikedCourses={setLikedCourses}>

                </Card>))
        }
        </div>
    )
}

export default Cards