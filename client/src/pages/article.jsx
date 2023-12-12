import React, { useState } from 'react'; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './article.css'; 

const Article = () => {

    const toolBarOptions = [['bold', 'italic'], ['link', 'image'], ['bold', 'italic', 'underline', 'strike'],       
     ['blockquote', 'code-block'],

     [{ 'header': 1 }, { 'header': 2 }, ],             
     [{ 'list': 'ordered'}, { 'list': 'bullet' }],
     [{ 'script': 'sub'}, { 'script': 'super' }],     
     [{ 'indent': '-1'}, { 'indent': '+1' }],         
     [{ 'direction': 'rtl' }],                        

     [{ 'size': ['small', false, 'large', 'huge'] }], 
     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

     [{ 'color': [] }, { 'background': [] }],          
     [{ 'font': [] }],
     [{ 'align': [] }],

     ['clean'] ]; 

    const module = {toolbar: toolBarOptions,}     

    const [ file, setFile ] = useState(""); 
    const [ titre, setTitre ] = useState(""); 
    const [ description, setDescription ] = useState(""); 
    const [ date, setDate ] = useState(""); 
    const [ category, setCategory ] = useState(""); 
    const [ content, setContent ] = useState(""); 

    const handleFile = (event) => setFile(event.target.files[0]); 
    const handleTitre = (event) => setTitre(event.target.value); 
    const handleDescription = (event) => setDescription(event.target.value); 
    const handleDate = (event) => setDate(event.target.value); 
    const handleCategory = (event) => setCategory(event.target.value); 

    const handleSubmit = async (event) => {

        event.preventDefault(); 

        const data = new FormData(); 
        data.set('file', file); 
        data.set('titre', titre); 
        data.set('description', description); 
        data.set('date', date); 
        data.set('category', category);
        data.set('content', content);

        try {
            const response = await fetch(process.env.REACT_APP_SERVER, {
            method: "POST", 
            body: data,
        })
        const responseData = await response.json(); 

        console.log(responseData);
        } catch (error) {
            console.error(error); 
        } 
    }; 

    return (
        <form className="writing--section" onSubmit={handleSubmit}>
            <div className="article">
              <ReactQuill className="editor" modules={module} theme="snow" value={content} onChange={setContent} />
            </div>
        <div className="info">
          <div className="item--resume">
            <input  required placeholder="image" type="file" name="file" id="file" onChange={handleFile} />
            <input required placeholder="Titre :" type="text" name="titre" id="titre" value={titre} onChange={handleTitre} />
            <textarea required placeholder="Resume :" type="text" name="description" id="description"  value={description} onChange={handleDescription} />
            <input required placeholder="date" type="date" name="date" id="date" value={date} onChange={handleDate} />
          </div>
          <div className="item--catégories">
            <h3>Catégories :</h3>
            <div className="label">
            <input type="radio" checked={category === "Croissance"} name="category" id="croissance" value="Croissance" onChange={handleCategory}/>
            <label htmlFor="croissance">Croissance</label>
            </div>
            <div className="label">
            <input type="radio" checked={category === "Bienêtre"} name="category" id="bienêtre" value="Bienêtre" onChange={handleCategory}/>
            <label htmlFor="bienêtre">Bien-Être</label>
            </div>
            <div className="label">
            <input type="radio"  checked={category === "Lifestyle"} name="category" id="lifestyle" value="Lifestyle" onChange={handleCategory}/>
            <label htmlFor="lifestyle">Lifestyle</label>
            </div>
            <div className="label">
            <input type="radio" checked={category === "Cuisine"} name="category" id="cuisine" value="Cuisine" onChange={handleCategory}/>
            <label htmlFor="cuisine">Cuisine</label>
            </div>
          </div>
          <div className="btn--publier">
            <button  type="submit">
              Publier
            </button>
          </div>
        </div>
      </form>
    )
}; 

export default Article; 