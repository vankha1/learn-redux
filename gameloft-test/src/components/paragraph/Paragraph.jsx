import  "./paragraph.css";

function Paragraph({title, text}) {
    return ( 
        <div className="paragraph">
            <h3 className="paragraph-title">{title}</h3>
            <p className="paragraph-text">{text}</p>
        </div>
     );
}

export default Paragraph;