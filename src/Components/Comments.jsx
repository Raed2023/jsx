import React from 'react'

const Comments = () => {
    const commentsData=[
        {
            name:"Hind",comment:"no comment"
        },
        {
            name:"Raed",comment:"use me as a dislike button"
        },
        {
            name:"eya", comment :"mabech ymchi"
        },
        {name:"anwar",comment:"Kima"}
    ]
  return (
    <div>
        {commentsData.map((el)=>
          <> <h4>{el.name}</h4> 
          
        <p>
            {el.comment}
        </p>
        </>
        )}
    </div>
  )
}

export default Comments