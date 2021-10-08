import React from 'react'

export default function DiaryNew() {
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [body,setBody] = useState('')

    const handleSubmit=()=>{
//Add data to firebase JSON 
    }
    return (
        <div>
                  <h1>Create a new Diary entry</h1>
        <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input  
        type="text"
        required 
        value={title}
        onChange= {(e)=>setTitle(e.target.value)}/>
        <label>Blog Author:</label>
        <input 
        type="text"
        required 
        value={author}
        onChange= {(e)=>setAuthor(e.target.value)}/>
        <label>Blog body</label>
        <textarea 
        required 
        onChange={(e)=>setBody(e.target.value)}>
        </textarea>
        <button className="bg-white m-10">Submit</button>
      </form>

        <div className="preview">
            <h1>Preview the blog before uploading</h1>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <p>{body}</p>
            
        </div>
        </div>
    )
}
