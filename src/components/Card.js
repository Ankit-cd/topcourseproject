import React from 'react';
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';


const Card = (props) => {
    let course=props.course;
    let title=props.course.title;
    let description=props.course.description.substr(0,100)+'.....';
    let image=props.course.image.url;
    let LikedCourses=props.LikedCourses;
    let setLikedCourses=props.setLikedCourses;

    function clickHandler(){
        if(LikedCourses.includes(course.id)){
            setLikedCourses((prev)=>prev.filter((cid)=> cid!==course.id));
            toast.warning("Like removed");
        }
        else{
            if(LikedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=>[course.id,...prev])
            }
            toast.success("Liked Sucessfully");
        }
    }



  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={image}></img>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px]
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        LikedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
            </div>
        </div>

        <div className='p-4'>
            <p className="text-white font-semibold text-lg leading-6">{title}</p>
            <p className='mt-2 text-white'>{description}</p>
        </div>

    </div>
  )
}

export default Card