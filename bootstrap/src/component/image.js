import photo from '../photos/photo1.jpg'
import photo1 from '../photos/photo2.jpg'
function Img(){
    return(
    <div style={{marginLeft:"120px"}}>
        <img src={photo} alt='no photo' height="180px" width="180px"></img>

        <img src={photo1} alt='no photo' height="180px" width="180px" style={{marginLeft:"33px"}}></img>
    </div>
    )
}
export default Img;