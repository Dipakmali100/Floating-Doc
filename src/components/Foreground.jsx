import React,{useRef} from 'react';
import Card from './Card';


function Foreground() {
    const ref=useRef(null);
    const data=[
        {
            desc: "This is the data, I want to displayed",
            filesize: ".9mb",
            close: true,
            tag: { isOpen:true, tagTitle:"Download Now", tagColor:"green"}
        },
        {
            desc: "This is what, I have built",
            filesize: ".8mb",
            close: true,
            tag: { isOpen:true, tagTitle:"Download Now", tagColor:"blue"}
        },
        {
            desc: "Programming is crazy",
            filesize: ".5mb",
            close: false,
            tag: { isOpen:false, tagTitle:"Download Now", tagColor:"green"}
        },
        {
            desc: "You must be the change you wish to see in the world.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen:true, tagTitle:"Download Now", tagColor:"blue"}
        }
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground
