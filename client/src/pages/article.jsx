import React, { useState, useRef, useMemo } from 'react'; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './article.css'; 

const Article = () => {

  const quillRef = useRef(); 

  const imageHandler = async () => {
      const input = document.createElement('input'); 
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');
      input.click(); 

      input.onchange = async () => {
        const file = input.files[0]; 
        if (file) {
          const data = new FormData(); 
          data.set('image', file); 

          try {
            const response = await fetch(process.env.REACT_APP_NEW_BLOGPOST_IMAGES, {
              method: "POST",  
              body: data,
          }); 
          const responseData = await response.json(); 
          if (response.ok && responseData.imageUrl) {
          const editor = quillRef.current.getEditor(); 
          const range = editor.getSelection(true); 
          console.log(responseData.imageUrl)
          editor.insertEmbed(range.index, 'image', responseData.imageUrl);
          } else {
            console.error('failed to upload file'); 
          }
          } catch (error) {
            console.error(`Error uploading file : ${error}`); 
          }
        } 
      }
  };  

    const toolBarOptions = useMemo(() => ([['bold', 'italic'], ['link', 'image'], ['bold', 'italic', 'underline', 'strike'],       
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

    ['clean'] ]), []); 
  
    const modules = useMemo(() => ({toolbar: {container: toolBarOptions, handlers: { image: imageHandler }}}), [toolBarOptions]);

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
        const content = quillRef.current.getEditor().root.innerHTML; 

        const data = new FormData(); 
        data.set('file', file); 
        data.set('titre', titre); 
        data.set('description', description); 
        data.set('date', date); 
        data.set('category', category);
        data.set('content', content);

        try {
            const response = await fetch(process.env.REACT_APP_NEW_BLOGPOST, {
            method: "POST", 
            body: data,
        })
        const responseData = await response.json(); 

        if (!response.ok) {
          throw new Error("Appel daniel"); 
        } else {
          return responseData; 
        }
        } catch (error) {
            console.error(error); 
        } 
    }; 

    return (
        <form className="writing--section" onSubmit={handleSubmit} /*enctype="multipart/form-data"*/>
            <ReactQuill className="editor" modules={modules} theme="snow" value={content} onChange={setContent} ref={quillRef} />
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
            <input type="radio" checked={category === "Développement-Personnel"} name="category" id="Développement-personnel" value="Développement-Personnel" onChange={handleCategory}/>
            <label htmlFor="Développement-personnel">Développement Personnel</label>
            </div>
            <div className="label">
            <input type="radio" checked={category === "Bien-être"} name="category" id="Bien-être" value="Bien-être" onChange={handleCategory}/>
            <label htmlFor="Bien-être">Bien-Être</label>
            </div>
            <div className="label">
            <input type="radio"  checked={category === "Lifestyle"} name="category" id="Lifestyle" value="Lifestyle" onChange={handleCategory}/>
            <label htmlFor="Lifestyle">Lifestyle</label>
            </div>
            <div className="label">
            <input type="radio" checked={category === "Cuisine"} name="category" id="Cuisine" value="Cuisine" onChange={handleCategory}/>
            <label htmlFor="Cuisine">Cuisine</label>
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