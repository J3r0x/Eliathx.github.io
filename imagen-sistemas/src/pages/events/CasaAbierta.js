import Gallery from "../../components/Gallery";

const CasaAbierta = () =>{

    const images = [
        {src:   "https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093530.jpg"},
        {src:   "https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093559.jpg"},
        {src:   "https://www.epn.edu.ec/wp-content/uploads/2020/09/infografia-salvoconductos-Retorno_responsable_EPN-mailing.jpg"}
    ]
    const images2 = [
        {src: "https://www.udual.org/principal/wp-content/uploads/2021/11/LOGO_EPN-1160x665.jpg"},
        {src: "https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093424.jpg"},
        {src: "https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093424.jpg"},
        {src:  "https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093520.jpg"},
    ]
    const images3 = [
        {src: "https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093424.jpg"},
        {src:  "https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093520.jpg"},
        {src: "https://www.udual.org/principal/wp-content/uploads/2021/11/LOGO_EPN-1160x665.jpg"},
    ]
    const images4 = [
        {src: "https://www.udual.org/principal/wp-content/uploads/2021/11/LOGO_EPN-1160x665.jpg"},
        {src: "https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093424.jpg"},
        {src: "https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093424.jpg"},
        {src: "https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093424.jpg"},
        {src:  "https://imagenfis.epn.edu.ec/images/casas-abiertas/2014/20141202_093520.jpg"},
    ]

  /* function getChunks(array){
       for (let i = 0; i < array.length; i += array.length/4) {


       }
       return chunk;
   }*/

    return <div className={"page"}>
       <Gallery files={images} files2={images2} files3={images3} files4={images4}/>
    </div>
}
export default CasaAbierta